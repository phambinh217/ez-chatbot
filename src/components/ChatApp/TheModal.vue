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
  @apply --fc-absolute --fc-top-0 --fc-left-0 --fc-w-full --fc-h-full --fc-bg-gray-500/90 --fc-flex --fc-flex-col --fc-items-center --fc-justify-center;
}
</style>
