<template>
  <div class="--fc-header-container">
    <div class="--fc-header-user">
      <div class="--fc-user-avatar">
        <img
          v-if="options?.hostUser?.avatarUrl"
          :src="options?.hostUser?.avatarUrl"
        />
      </div>
      <div class="--fc-user-name">
        {{ options?.hostUser?.name }}
      </div>
    </div>
    <div class="--fc-header-buttons">
      <button class="--fc-reset-button" @click="$emit('click-reset-button')">
        <UndoIcon class="--fc-icon" />
      </button>
      <button class="--fc-close-button">
        <CloseIcon class="--fc-icon" @click="$emit('click-close-button')" />
      </button>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from "../../assets/svgIcons/close.svg";
import UndoIcon from "../../assets/svgIcons/undo.svg";

defineProps({
  options: {
    type: Object,
    default: () => {},
  },
});

const $emit = defineEmits(["click-reset-button", 'click-close-button']);
</script>

<style scoped>
.--fc-header-container {
  @apply --fc-bg-[var(--fc-primary-color)] --fc-px-4 --fc-py-2 --fc-text-white --fc-flex --fc-items-center --fc-justify-between;
}

.--fc-header-user {
  @apply --fc-flex --fc-items-center --fc-gap-2;
}

.--fc-user-name {
  @apply --fc-font-semibold;
}

.--fc-user-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-300 --fc-overflow-hidden;
}

.--fc-user-avatar img {
  @apply --fc-w-full;
}

.--fc-header-buttons {
  @apply --fc-flex --fc-items-center --fc-gap-2;
}

.--fc-header-buttons button {
  @apply --fc-shadow --fc-h-4 --fc-w-4 --fc-rounded-full --fc-flex --fc-items-center --fc-justify-center hover:--fc-text-gray-800 hover:--fc-fill-gray-800;
}

.--fc-header-buttons button .--fc-icon {
  @apply --fc-text-[10px] --fc-h-[10px] --fc-w-[10px];
}

.--fc-reset-button {
  @apply --fc-bg-yellow-500 --fc-text-yellow-500 --fc-fill-yellow-500;
}

.--fc-close-button {
  @apply --fc-bg-red-500 --fc-text-red-500 --fc-fill-red-500;
}
</style>
