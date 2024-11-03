<template>
  <div
    class="--fc-application --fc-formchat-dot-net"
    :class="{
      '--fc-dark-theme': options?.styles?.theme === 'dark',
      '--fc-light-theme': options?.styles?.theme === 'light',
    }"
  >
    <div class="--fc-application-inner">
      <Transition
        enter-active-class="--fc-transition --fc-duration-150 --fc-ease-in-out"
        enter-from-class="--fc-opacity-0 --fc-translate-y-4"
        enter-to-class="--fc-opacity-100 --fc-translate-y-0"
        leave-active-class="--fc-transition --fc-duration-150 --fc-ease-in-out"
        leave-from-class="--fc-opacity-100 --fc-translate-y-0"
        leave-to-class="--fc-opacity-0 --fc-translate-y-4"
      >
        <div
          v-show="chatWindowOpen"
          class="--fc-absolute --fc-bottom-[100%] --fc-w-[400px]"
        >
          <ChatWindow
            ref="chatWindowRef"
            :options="options"
            :scripts="scripts"
            @finished="handleFinished"
            @answered="handleAnswered"
            @click-close-button="chatWindowOpen = false"
            @after-reset="handleAfterResetConversation"
          />
        </div>
      </Transition>

      <Transition
        enter-active-class="--fc-transition --fc-duration-150 --fc-ease-in-out"
        enter-from-class="--fc-opacity-0 --fc-translate-y-4"
        enter-to-class="--fc-opacity-100 --fc-translate-y-0"
        leave-active-class="--fc-transition --fc-duration-150 --fc-ease-in-out"
        leave-from-class="--fc-opacity-100 --fc-translate-y-0"
        leave-to-class="--fc-opacity-0 --fc-translate-y-4"
      >
        <div
          v-show="showWelcomeMessage"
          class="--fc-absolute --fc-bottom-[100%] --fc-w-[350px]"
        >
          <ChatWelcomeMessage
            :message="welcomeMessage"
            @select-option="handleSelectOptionInWelcomeMessage"
          />
        </div>
      </Transition>
    </div>

    <div
      v-if="showBubble"
      class="--fc-bubble-container"
      @click="handleClickToggleChatWindow"
    >
      <ForumOutlineIcon class="--fc-bubble-icon" />
    </div>
  </div>
</template>

<script setup>
import "@/assets/chat.css";

import { ref, watch, computed, onMounted } from "vue";
import { randomString } from "@/helpers/string";
import injectPlugins from "@/plugins";
import ChatWindow from "./ChatApp/ChatWindow.vue";
import ChatWelcomeMessage from "./ChatApp/ChatWelcomeMessage.vue";
import ForumOutlineIcon from "@/assets/svgIcons/forum-outline.svg";

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

const $emit = defineEmits(["finished", "answered"]);
const chatWindowRef = ref(null);
const chatWindowOpen = ref(false);
const conversationWasStarted = ref(false);
const sessionId = ref(randomString());
const onFinishedCallback = ref([]);
const onChangedSessionCallback = ref([]);
const onAnsweredCallback = ref([]);

/**
 * Only show welcome message if conversation was not started
 */
const showWelcomeMessage = computed(
  () => props.options.welcomeMessage && conversationWasStarted.value == false
);

const welcomeMessage = computed(() => props.scripts[0]);

const showBubble = computed(
  () => props.options?.embedded?.type != "background"
);

const onFinished = (callback) => {
  onFinishedCallback.value.push(callback);
};

const onChangedSession = (callback) => {
  onChangedSessionCallback.value.push(callback);
};

const onAnswered = (callback) => {
  onAnsweredCallback.value.push(callback);
};

const handleFinished = (data) => {
  $emit("finished", data);

  for (const callback of onFinishedCallback.value) {
    callback(data);
  }
};

const handleAnswered = (data) => {
  $emit("answered", data);

  for (const callback of onAnsweredCallback.value) {
    callback(data);
  }
};

const toggleChatWindow = () => {
  chatWindowOpen.value = !chatWindowOpen.value;

  if (chatWindowOpen.value) {
    showChatWindow();
  } else {
    hideChatWindow();
  }
};

const showChatWindow = () => {
  chatWindowOpen.value = true;

  /**
   * Only start conversation if conversation was not started
   */
  if (conversationWasStarted.value == false) {
    chatWindowRef.value.startConversationWithDelay();
  }

  conversationWasStarted.value = true;
};

const hideChatWindow = () => {
  chatWindowOpen.value = false;
};

const handleClickToggleChatWindow = () => toggleChatWindow();

const handleSelectOptionInWelcomeMessage = (payload) => {
  /**
   * Stop conversation if welcome message was shown
   */
  if (showWelcomeMessage.value == false) {
    return;
  }

  chatWindowOpen.value = true;
  chatWindowRef.value.startConversation();
  chatWindowRef.value.triggerSelectOptionInMessage(payload);
  conversationWasStarted.value = true;
};

// const handleClickOutSideChatApp = () => {
//   if (!props.options?.clickOutSideClose) {
//     return;
//   }

//   if (!chatWindowOpen.value) {
//     return;
//   }

//   hideChatWindow();
// };

const handleAfterResetConversation = () => {
  sessionId.value = randomString();

  for (const callback of onChangedSessionCallback.value) {
    callback(sessionId.value);
  }
};

const initStyle = () => {
  if (typeof document == "undefined") {
    return false;
  }

  const rootEl = document.querySelector(":root");

  const primaryColor = props.options?.styles?.primaryColor;
  const primaryLightColor = props.options?.styles?.primaryLightColor;

  if (primaryColor) {
    rootEl?.style.setProperty("--fc-primary-color", primaryColor);
  }

  if (primaryLightColor) {
    rootEl?.style.setProperty("--fc-primary-light-color", primaryLightColor);
  }
};

watch(
  () => props.options,
  () => initStyle(),
  {
    immediate: true,
  }
);

const loadPlugin = () => {
  injectPlugins({
    app: {
      onFinished,
      onAnswered,
      onChangedSession,
      initSessionId: sessionId.value,
    },

    options: props.options,
  });
};
onMounted(() => loadPlugin());

onMounted(() =>
  console.log(
    "%c This website is using formchat.net to create chat boxes. Please visit https://formchat.net/ to get started.",
    "background: #222; color: #bada55"
  )
);

defineExpose({
  onFinished,
  toggleChatWindow,
  showChatWindow,
  hideChatWindow,
});
</script>

<style scoped>
.--fc-application {
  @apply --fc-fixed --fc-right-[50px] --fc-bottom-[50px];
  @apply --fc-flex --fc-flex-col --fc-justify-center --fc-items-end --fc-gap-5;
  @apply --fc-z-[9999];
}

.--fc-application-inner {
  @apply --fc-flex --fc-flex-col --fc-justify-center --fc-items-end --fc-gap-5;
}

.--fc-bubble-container {
  @apply --fc-shadow-2xl --fc-cursor-pointer --fc-h-[70px] --fc-w-[70px] --fc-bg-[var(--fc-primary-color)] --fc-rounded-full --fc-flex --fc-items-center --fc-justify-center;
}

.--fc-bubble-icon {
  @apply --fc-w-[40px] --fc-fill-white;
}
</style>
