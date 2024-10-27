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
  @apply --fc-self-start --fc-animate-pulse;
}

.chat-message-loading-item-inner {
  @apply --fc-flex --fc-flex-row --fc-gap-1;
}

.chat-message-loading-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-200 --fc-overflow-hidden;
}

.chat-message-loading-content {
  @apply --fc-p-3 --fc-rounded-2xl --fc-gap-3 --fc-bg-blue-200 --fc-text-gray-900;
}

.chat-message-loading-text {
  @apply --fc-p-3;
}
</style>
