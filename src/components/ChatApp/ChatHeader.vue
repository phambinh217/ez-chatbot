<template>
  <div class="chat-header-container">
    <div class="chat-header-user">
      <div class="chat-user-avatar">
        <img
          v-if="options?.hostUser?.avatarUrl"
          :src="options?.hostUser?.avatarUrl"
        />
      </div>
      <div class="chat-user-name">
        {{ options?.hostUser?.name }}
      </div>
    </div>
    <div class="chat-header-buttons">
      <button class="chat-reset-button" @click="$emit('click-reset-button')">
        <UndoIcon class="chat-icon" />
      </button>
      <button class="chat-toggle-button">
        <MinusIcon class="chat-icon" />
      </button>
      <button class="chat-close-button">
        <CloseIcon class="chat-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from "../../assets/svgIcons/close.svg";
import UndoIcon from "../../assets/svgIcons/undo.svg";
import MinusIcon from "../../assets/svgIcons/minus.svg";

defineProps({
  options: {
    type: Object,
    default: () => {},
  },
});

const $emit = defineEmits(["click-reset-button"]);
</script>

<style scoped>
.chat-header-container {
  @apply tw-bg-[var(--chat-primary-color)] tw-px-4 tw-py-2 tw-text-white tw-flex tw-items-center tw-justify-between;
}

.chat-header-user {
  @apply tw-flex tw-items-center tw-gap-2;
}

.chat-user-name {
  @apply tw-font-semibold;
}

.chat-user-avatar {
  @apply tw-w-[30px] tw-h-[30px] tw-rounded-full tw-bg-gray-300;
}

.chat-user-avatar img {
  @apply tw-w-full;
}

.chat-header-buttons {
  @apply tw-flex tw-items-center tw-gap-2;
}

.chat-header-buttons button {
  @apply tw-shadow tw-h-4 tw-w-4 tw-rounded-full tw-flex tw-items-center tw-justify-center hover:tw-text-gray-800 hover:tw-fill-gray-800;
}

.chat-header-buttons button .chat-icon {
  @apply tw-text-[10px] tw-h-[10px] tw-w-[10px];
}

.chat-toggle-button {
  @apply tw-bg-yellow-500 tw-text-yellow-500 tw-fill-yellow-500;
}

.chat-reset-button {
  @apply tw-bg-green-500 tw-text-green-500 tw-fill-green-500;
}

.chat-close-button {
  @apply tw-bg-red-500 tw-text-red-500 tw-fill-red-500;
}
</style>
