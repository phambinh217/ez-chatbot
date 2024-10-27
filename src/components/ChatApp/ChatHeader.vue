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
  @apply --fc-bg-[var(--chat-primary-color)] --fc-px-4 --fc-py-2 --fc-text-white --fc-flex --fc-items-center --fc-justify-between;
}

.chat-header-user {
  @apply --fc-flex --fc-items-center --fc-gap-2;
}

.chat-user-name {
  @apply --fc-font-semibold;
}

.chat-user-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-300;
}

.chat-user-avatar img {
  @apply --fc-w-full;
}

.chat-header-buttons {
  @apply --fc-flex --fc-items-center --fc-gap-2;
}

.chat-header-buttons button {
  @apply --fc-shadow --fc-h-4 --fc-w-4 --fc-rounded-full --fc-flex --fc-items-center --fc-justify-center hover:--fc-text-gray-800 hover:--fc-fill-gray-800;
}

.chat-header-buttons button .chat-icon {
  @apply --fc-text-[10px] --fc-h-[10px] --fc-w-[10px];
}

.chat-toggle-button {
  @apply --fc-bg-yellow-500 --fc-text-yellow-500 --fc-fill-yellow-500;
}

.chat-reset-button {
  @apply --fc-bg-green-500 --fc-text-green-500 --fc-fill-green-500;
}

.chat-close-button {
  @apply --fc-bg-red-500 --fc-text-red-500 --fc-fill-red-500;
}
</style>
