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
import { randomString } from "@/helpers/string";
import ChatComposer from "./ChatComposer.vue";
import ChatConversation from "./ChatConversation.vue";
import ChatMessage from "./ChatMessage.vue";
import ChatHeader from "./ChatHeader.vue";
import ChatResetConfirmModal from "./ChatResetConfirmModal.vue";
import messageTypeProviders from '@/message-type-providers';

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

const $emit = defineEmits(["finished", "click-close-button"]);

const chatWindowStyles = computed(() => {
  return props.options?.styles?.chatWindow;
});

const chatResetConfirmModal = ref({
  open: false,
});

const messageFactory = () => ({
  id: null,
  position: "left",
  type: "text",
  content: "",
  options: null,
});

const scriptFactory = (script) => ({
  id: randomString(),
  type: "text",
  skippable: false,
  skipText: "Skip",
  longAnswer: false,
  content: "",
  ...script,
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

const isQuestionScript = (script) => {
  const scriptType = script.type;
  const messageProvider = messageTypeProviders[scriptType] || null;

  if (!messageProvider) {
    return false;
  }

  /**
   * !! to force convert to boolean
   */
  return !!messageProvider?.isQuestion;
}

const frequencyNextScriptId = computed(() => {
  let scriptId = null;

  const maybeNextScript = scripts.value[currentScriptIndex.value + 1];

  if (maybeNextScript) {
    scriptId = maybeNextScript.id;
  }

  return scriptId;
});

const addConversationMessage = (data) => {
  conversationMessages.value.push(data);

  /**
   * Scroll to bottom after 100ms adding new message
   */
  setTimeout(() => chatConversationRef.value.scrollToBottom(), 100);

  if (data.position == "left") {
    currentUserAnswer.value = messageFactory();
  } else {
    /**
     * if current script is a question
     * then set current user answer
     */
    if (isQuestionScript(currentScript.value)) {
      currentUserAnswer.value = data;
    } else {
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
    position: "left",
    content: script.content,
    options: script.options,
    type: script.type,
  });

  runNextScriptIfHas();
};

const runScriptWithDelay = (scriptId) => {
  setTimeout(() => runScript(scriptId), 300);
};

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

  // if (currentScript.value.type == 'email' && currentUserAnswer.value.content.includes('@') == false) {
  //   addConversationMessage({
  //     position: 'left',
  //     type: 'text',
  //     content: 'Vui lòng nhập đ goede email'
  //   })

  //   return false;
  // }

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
    position: "right",
    content: userChatMessage.value,
    type: "text",
  });

  userChatMessage.value = "";

  await runNextScriptIfHas();
};

const handleSelectOptionInMessage = async ({ option }) => {
  addConversationMessage({
    position: "right",
    content: option,
    type: "text",
  });

  await runNextScriptIfHas();
};

const triggerSelectOptionInMessage = handleSelectOptionInMessage;

const handleClickSkipButton = async () => {
  await runNextScriptIfHas(false);
};

const handleClickResetButton = () => {
  chatResetConfirmModal.value.open = true;
};

const handleClickCloseButton = () => {
  $emit("click-close-button");
};

const handleConfirmResetChat = () => {
  chatResetConfirmModal.value.open = false;

  conversationMessages.value = [];
  userChatMessage.value = "";
  currentScript.value = scriptFactory();
  latestUserMessage.value = messageFactory();
  currentUserAnswer.value = messageFactory();

  runScriptWithDelay();
};

defineExpose({
  addConversationMessage,
  triggerSelectOptionInMessage,
  startConversationWithDelay,
  startConversation,
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
  @apply --fc-border-blue-200 --fc-px-3 --fc-py-1 --fc-text-[var(--fc-primary-color)] --fc-rounded-full;
  @apply --fc-border --fc-border-solid --fc-border-[var(--fc-primary-color)] --fc-bg-white --fc-shadow --fc-text-xs;
}

.--fc-body {
  @apply --fc-relative;
}
</style>
