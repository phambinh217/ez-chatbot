<template>
  <div
    class="chat-application tw-fixed tw-right-[50px] tw-bottom-[50px] tw-flex tw-flex-col tw-justify-center tw-items-end tw-gap-5"
    :class="{
      'chat-dark-theme': options?.styles?.theme === 'dark',
      'chat-light-theme': options?.styles?.theme === 'light',
    }"
  >
    <Transition
      enter-active-class="tw-transition tw-duration-150 tw-ease-in-out"
      enter-from-class="tw-opacity-0 tw-translate-y-4"
      enter-to-class="tw-opacity-100 tw-translate-y-0"
      leave-active-class="tw-transition tw-duration-150 tw-ease-in-out"
      leave-from-class="tw-opacity-100 tw-translate-y-0"
      leave-to-class="tw-opacity-0 tw-translate-y-4"
    >
      <ChatWindow
        v-show="chatWindowOpen"
        ref="chatWindowRef"
        :options="options"
        :scripts="scripts"
        @finished="handleFinished"
      />
    </Transition>
    <div
      v-if="showBubble"
      class="tw-shadow-lg tw-cursor-pointer tw-h-[70px] tw-w-[70px] tw-bg-[var(--chat-primary-color)] tw-rounded-full tw-flex tw-items-center tw-justify-center"
      @click="handleClickToggleChatWindow"
    >
      <ForumOutlineIcon class="tw-w-[40px] tw-fill-white" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import ChatWindow from "./ChatApp/ChatWindow.vue";
import ForumOutlineIcon from '../assets/svgIcons/forum-outline.svg';

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

const $emit = defineEmits(["finished"]);
const finishedCallback = ref(null);
const chatWindowRef = ref(null);
const chatWindowOpen = ref(false);

const showBubble = computed(() => props.options?.embedded?.type != "background");

const onFinished = (callback) => {
  finishedCallback.value = callback;
};

const handleFinished = (data) => {
  $emit("finished", data);

  if (typeof finishedCallback.value == "function") {
    finishedCallback.value(data);
  }
};

const toggleChatWindow = () => {
  chatWindowOpen.value = !chatWindowOpen.value;
};

const showChatWindow = () => {
  chatWindowOpen.value = true;
}

const hideChatWindow = () => {
  chatWindowOpen.value = false;
}

const handleClickToggleChatWindow = () => {
  toggleChatWindow();
};

const initStyle = () => {
  const rootEl = document.querySelector(":root");

  const primaryColor = props.options?.styles?.primaryColor;
  const primaryLightColor = props.options?.styles?.primaryLightColor;

  if (primaryColor) {
    rootEl?.style.setProperty("--chat-primary-color", primaryColor);
  }

  if (primaryLightColor) {
    rootEl?.style.setProperty("--chat-primary-light-color", primaryLightColor);
  }
};

watch(
  () => props.options,
  () => initStyle(),
  {
    immediate: true,
  }
);

defineExpose({
  onFinished,
  toggleChatWindow,
  showChatWindow,
  hideChatWindow,
});
</script>
