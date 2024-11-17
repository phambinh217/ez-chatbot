<template>
  <div
    class="--fc-application --fc-formchat-dot-net"
    :class="{
      '--fc-dark-theme': _options?.styles?.theme === 'dark',
      '--fc-light-theme': _options?.styles?.theme === 'light',
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
            :options="_options"
            :scripts="_scripts"
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
          v-if="showWelcomeMessage"
          class="--fc-absolute --fc-bottom-[100%] --fc-w-[350px]"
        >
          <ChatWelcomeMessage
            :message="welcomeMessage"
            :options="_options"
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

import { ref, watch, computed, onMounted, toRefs } from "vue";
import { randomString } from "@/helpers/string";
import { messageFactory } from "@/helpers/factory";
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

const {
  scripts: _scripts,
  options: _options,
} = toRefs(props);

const $emit = defineEmits(["finished", "answered"]);

const chatWindowRef = ref(null);
const chatWindowOpen = ref(false);
const conversationWasStarted = ref(false);
const sessionId = ref(randomString());

const welcomeMessage = computed(() => {
  let message = props.scripts[0];

  if (message) {
    message = messageFactory(message);
  }

  return message;
});

/**
 * Only show welcome message if conversation was not started
 */
const showWelcomeMessage = computed(() => {
  return !!(
    (
      welcomeMessage.value && // Has welcome message
      _options.value?.welcomeMessage && // Show welcome message in options
      conversationWasStarted.value == false
    ) // Conversation was not started
  );
});

const showBubble = computed(
  () => _options.value?.embedded?.type != "background"
);

const handleAnswered = (data) => {
  const emitPayload = {
    sessionId: sessionId.value,
    data,
  };

  $emit("answered", emitPayload);
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

const handleAfterResetConversation = () => {
  sessionId.value = randomString();
};

const initStyle = () => {
  if (typeof document == "undefined") {
    return false;
  }

  const rootEl = document.querySelector(":root");

  const primaryColor = _options.value?.styles?.primaryColor;
  const primaryContrastColor = _options.value?.styles?.primaryContrastColor;
  const secondaryColor = _options.value?.styles?.secondaryColor;
  const secondaryContrastColor = _options.value?.styles?.secondaryContrastColor;

  if (primaryColor) {
    rootEl?.style.setProperty("--fc-primary-color", primaryColor);
  }

  if (primaryContrastColor) {
    rootEl?.style.setProperty("--fc-primary-contrast-color", primaryContrastColor);
  }

  if (secondaryColor) {
    rootEl?.style.setProperty("--fc-secondary-color", secondaryColor);
  }

  if (secondaryContrastColor) {
    rootEl?.style.setProperty("--fc-secondary-contrast-color", secondaryContrastColor);
  }
};

watch(_options, () => initStyle(), {
  immediate: true,
});

onMounted(() =>
  console.log(
    "%c This website is using formchat.net to create chat boxes. Please visit https://formchat.net/ to get started.",
    "background: #222; color: #bada55"
  )
);
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
  @apply --fc-w-[40px] --fc-fill-[var(--fc-primary-contrast-color)];
}
</style>
