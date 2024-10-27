<template>
  <div v-for="(width, index) in widths" class="--fc-message-loading-item-container" :key="index">
    <div class="--fc-message-loading-item-inner">
      <div
        class="--fc-message-loading-avatar"
      />
      <div
        class="--fc-message-loading-content"
        :style="{ width: `${width}px` }"
      >
        <div class="--fc-message-loading-text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const widths = ref([200, 150, 250]);
</script>

<style scoped>
.--fc-message-loading-item-container {
  @apply --fc-self-start --fc-animate-pulse;
}

.--fc-message-loading-item-inner {
  @apply --fc-flex --fc-flex-row --fc-gap-1;
}

.--fc-message-loading-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-200 --fc-overflow-hidden;
}

.--fc-message-loading-content {
  @apply --fc-p-3 --fc-rounded-2xl --fc-gap-3 --fc-bg-blue-200 --fc-text-gray-900;
}

.--fc-message-loading-text {
  @apply --fc-p-3;
}
</style>
