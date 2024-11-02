<template>
  <div class="--fc-message-content-inner">
    <div class="--fc-message-text">
      {{ message.content }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },

  options: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped>
.--fc-message-content-inner {
  @apply --fc-flex --fc-flex-col --fc-gap-2;
}
</style>
