<template>
  <div class="--fc-window" :style="chatWindowStyles">
    <ChatHeader
      :options="options"
      @click-reset-button="handleClickResetButton"
      @click-close-button="handleClickCloseButton"
    />
    <div class="--fc-body">
      <ChatConversation ref="chatConversationRef" :options="options">
        <ChatMessage
          v-for="(message, index) in conversationMessages"
          :key="index"
          :message="message"
          :options="options"
          @select-option="handleSelectOptionInMessage"
        />

        <div v-if="currentScript.skippable" class="skip-container">
          <button @click="handleClickSkipButton">
            {{ currentScript.skipText }}
          </button>
        </div>
      </ChatConversation>
      <ChatComposer
        v-model:message="userChatMessage"
        :options="options"
        :long-message="currentScript.longAnswer"
        @submit="handleUserAddNewChatMessage"
      />
      <ChatResetConfirmModal
        v-model:open="chatResetConfirmModal.open"
        @confirmed="handleConfirmResetChat"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { isQuestionScript } from "@/helpers/script";
import { messageFactory, scriptFactory } from "@/helpers/factory";
import ChatComposer from "./ChatComposer.vue";
import ChatConversation from "./ChatConversation.vue";
import ChatMessage from "./ChatMessage.vue";
import ChatHeader from "./ChatHeader.vue";
import ChatResetConfirmModal from "./ChatResetConfirmModal.vue";
import messageTypeProviders from "@/message-type-providers";

const props = defineProps({
  scripts: {
    type: Array,
    default: () => [],
  },

  options: {
    type: Object,
    default: () => {
      return {
        //
      };
    },
  },
});

const $emit = defineEmits([
  "finished",
  "click-close-button",
  "after-reset",
  "answered",
]);

const chatWindowStyles = computed(() => {
  return props.options?.styles?.chatWindow;
});

const chatResetConfirmModal = ref({
  open: false,
});

const scripts = computed(() => props.scripts.map(scriptFactory));

const context = computed(() => {
  return {
    scripts: scripts.value,
    currentScript: currentScript.value,
    currentScriptIndex: currentScriptIndex.value,
    latestUserMessage: latestUserMessage.value,
    conversationMessages: conversationMessages.value,
    addConversationMessage: addConversationMessage,
  };
});

const conversationMessages = ref([]);
const userChatMessage = ref("");
const currentScript = ref(scriptFactory());
const latestUserMessage = ref(messageFactory());
const currentUserAnswer = ref(messageFactory());

const currentScriptIndex = computed(() => {
  const scriptIds = scripts.value.map((script) => script.id);
  return scriptIds.indexOf(currentScript.value.id);
});

const chatConversationRef = ref();

const frequencyNextScriptId = computed(() => {
  let scriptId = null;

  const maybeNextScript = scripts.value[currentScriptIndex.value + 1];

  if (maybeNextScript) {
    scriptId = maybeNextScript.id;
  }

  return scriptId;
});

const addConversationMessage = (message) => {
  conversationMessages.value.push(message);

  /**
   * Scroll to bottom after 100ms adding new message
   */
  setTimeout(() => chatConversationRef.value.scrollToBottom(), 100);

  /**
   * If message is belong to host user
   * We will reset current user answer
   *
   * Because maybe host user want to ask another question
   */
  if (message.userRole == "host") {
    currentUserAnswer.value = messageFactory();
  }

  /**
   * Else
   * That mean this message is belong to agent user
   */
  else {
    /**
     * If current script is a question
     * then set current user answer is the message
     */
    if (isQuestionScript(currentScript.value)) {
      currentUserAnswer.value = message;
      currentScript.value.answer = { ...message };

      $emit("answered", currentScript.value);
    }

    /**
     * Else
     * That mean current script is not a question
     * So we will reset current user answer
     */
    else {
      currentUserAnswer.value = messageFactory();
    }
  }
};

const runScript = (scriptId) => {
  let script;

  if (!scriptId) {
    script = scripts.value.find(() => true);
  } else {
    script = scripts.value.find((s) => s.id == scriptId);
  }

  if (!script) {
    return;
  }

  currentScript.value = script;

  addConversationMessage({
    userRole: "host",
    content: script.content,
    options: script.options,
    type: script.type,
    scriptId: script.id,
  });

  runNextScriptIfHas();
};

const runScriptWithDelay = (scriptId) => setTimeout(() => runScript(scriptId), 300);

const startConversationWithDelay = () => runScriptWithDelay(null);

const startConversation = () => runScript(null);

const runNextScriptIfHas = async (requiredAnswer = true) => {
  /**
   * If current script is a question
   * But user has not answered it yet
   * then don't run next script
   */
  if (
    isQuestionScript(currentScript.value) &&
    !currentUserAnswer.value.content &&
    requiredAnswer
  ) {
    return false;
  }

  if (requiredAnswer) {
    /**
     * Validate answer
     */
    const messageTypeProvider = messageTypeProviders[currentScript.value.type];

    if (messageTypeProvider && messageTypeProvider?.onValidate) {
      const result = messageTypeProvider.onValidate({
        context: context.value,
        script: currentScript.value,
        answer: currentUserAnswer.value,
        options: props.options,
      });

      if (result === false) {
        return false;
      }
    }
  }

  let nextScriptId = currentScript.value.next;

  /**
   * If next script is a function
   * then run it
   */
  if (typeof nextScriptId == "function") {
    nextScriptId = nextScriptId(context.value, currentUserAnswer.value.content);

    if (nextScriptId instanceof Promise) {
      try {
        nextScriptId = await nextScriptId;
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }

  /**
   * If next script is an object
   * Example
   * {
   *    optionA: 1,
   *    optionB: 2
   * }
   */
  if (typeof nextScriptId == "object") {
    const answer =
      currentUserAnswer.value.content?.value || currentUserAnswer.value.content;
    nextScriptId = nextScriptId[answer] || nextScriptId?.__unmatched;
  }

  /**
   * If next script is a empty
   * And has next script
   * then run next script
   */
  if (!nextScriptId) {
    nextScriptId = frequencyNextScriptId.value;
  }

  /**
   * If next script is not a empty
   * then run it
   */
  if (nextScriptId) {
    runScriptWithDelay(nextScriptId);
    return;
  }

  if (!nextScriptId && isQuestionScript(currentScript.value) == false) {
    $emit("finished", context.value);
    return;
  }

  if (
    !nextScriptId &&
    isQuestionScript(currentScript.value) &&
    currentUserAnswer.value
  ) {
    $emit("finished", context.value);
    return;
  }
};

const handleUserAddNewChatMessage = async () => {
  if (!userChatMessage.value.trim()) {
    return;
  }

  addConversationMessage({
    userRole: "agent",
    content: userChatMessage.value,
    type: "text",
  });

  userChatMessage.value = "";

  await runNextScriptIfHas();
};

const handleSelectOptionInMessage = async (payload) => {
  const scriptId = payload.message.scriptId;

  /**
   * After user select option
   * We set current script is the script that user select option
   */
  if (scriptId != currentScript.value.id) {
    const script = scripts.value.find((s) => s.id == scriptId);

    if (script) {
      currentScript.value = script;
    }
  }

  addConversationMessage({
    userRole: "agent",
    content: payload.option,
    type: "text",
  });

  await runNextScriptIfHas();
};


const handleClickSkipButton = async () => {
  await runNextScriptIfHas(false);
};


const handleClickResetButton = () => {
  chatResetConfirmModal.value.open = true;
};

const handleClickCloseButton = () => {
  $emit("click-close-button");
};

const resetConversation = () => {
  conversationMessages.value = [];
  userChatMessage.value = "";
  currentScript.value = scriptFactory();
  latestUserMessage.value = messageFactory();
  currentUserAnswer.value = messageFactory();
}

const handleConfirmResetChat = () => {
  chatResetConfirmModal.value.open = false;

  resetConversation();
  runScriptWithDelay();
  $emit("after-reset");
};

defineExpose({
  addConversationMessage,
  startConversationWithDelay,
  startConversation,
  resetConversation,
  triggerSelectOptionInMessage: handleSelectOptionInMessage,
  triggerClickSkipButton: handleClickSkipButton,
});

</script>

<style scoped>
.--fc-window {
  @apply --fc-bg-white --fc-rounded-xl --fc-flex --fc-flex-col --fc-text-sm --fc-overflow-hidden --fc-relative --fc-shadow-2xl;
}

.skip-container {
  @apply --fc-bottom-1 --fc-sticky --fc-w-full --fc-flex --fc-items-center --fc-justify-center;
}

.skip-container button {
  @apply --fc-border-blue-200 --fc-px-3 --fc-py-2 --fc-text-[var(--fc-primary-color)] --fc-rounded-full;
  @apply --fc-border --fc-border-solid --fc-border-[var(--fc-primary-color)] --fc-bg-white --fc-shadow;
}

.--fc-body {
  @apply --fc-relative;
}
</style>
