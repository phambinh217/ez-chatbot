<template>
  <div v-for="(width, index) in widths" class="chat-message-loading-item-container" :key="index">
    <div class="chat-message-loading-item-inner">
      <div
        class="chat-message-loading-avatar"
      />
      <div
        class="chat-message-loading-content"
        :style="{ width: `${width}px` }"
      >
        <div class="chat-message-loading-text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const widths = ref([200, 150, 250]);
</script>

<style scoped>
.chat-message-loading-item-container {
  @apply tw-self-start tw-animate-pulse;
}

.chat-message-loading-item-inner {
  @apply tw-flex tw-flex-row tw-gap-1;
}

.chat-message-loading-avatar {
  @apply tw-w-[30px] tw-h-[30px] tw-rounded-full tw-bg-gray-200 tw-overflow-hidden;
}

.chat-message-loading-content {
  @apply tw-p-3 tw-rounded-2xl tw-gap-3 tw-bg-blue-200 tw-text-gray-900;
}

.chat-message-loading-text {
  @apply tw-p-3;
}
</style>
