<template>
  <div
    class="chat-application"
    :class="{
      'chat-dark-theme': options?.styles?.theme === 'dark',
      'chat-light-theme': options?.styles?.theme === 'light',
    }"
  >
    <Transition
      enter-active-class="--fc-transition --fc-duration-150 --fc-ease-in-out"
      enter-from-class="--fc-opacity-0 --fc-translate-y-4"
      enter-to-class="--fc-opacity-100 --fc-translate-y-0"
      leave-active-class="--fc-transition --fc-duration-150 --fc-ease-in-out"
      leave-from-class="--fc-opacity-100 --fc-translate-y-0"
      leave-to-class="--fc-opacity-0 --fc-translate-y-4"
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
      class="--fc-shadow-lg --fc-cursor-pointer --fc-h-[70px] --fc-w-[70px] --fc-bg-[var(--chat-primary-color)] --fc-rounded-full --fc-flex --fc-items-center --fc-justify-center"
      @click="handleClickToggleChatWindow"
    >
      <ForumOutlineIcon class="--fc-w-[40px] --fc-fill-white" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import ChatWindow from "./ChatApp/ChatWindow.vue";
import ForumOutlineIcon from "../assets/svgIcons/forum-outline.svg";

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

const showBubble = computed(
  () => props.options?.embedded?.type != "background"
);

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
};

const hideChatWindow = () => {
  chatWindowOpen.value = false;
};

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

<style scoped>
.chat-application {
  @apply --fc-fixed --fc-right-[50px] --fc-bottom-[50px] --fc-flex --fc-flex-col --fc-justify-center --fc-items-end --fc-gap-5;
}
</style>
