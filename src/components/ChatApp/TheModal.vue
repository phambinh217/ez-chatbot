<template>
  <div v-if="open" class="chat-modal-backdrop">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.chat-modal-backdrop {
  @apply tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gray-500/90 tw-flex tw-flex-col tw-items-center tw-justify-center;
}
</style>
