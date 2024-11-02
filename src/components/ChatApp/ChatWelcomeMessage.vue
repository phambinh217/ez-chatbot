<template>
  <div class="--fc-welcome-message-container">
    <ChatMessage
      :message="message"
      @select-option="handleSelectOptionInMessage"
    />
  </div>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue';

defineProps({
  message: {
    type: Object,
    default: () => {},
  }
})

const $emit = defineEmits(["select-option"]);

const handleSelectOptionInMessage = ({ message, option, optionIndex }) => {
  $emit("select-option", { message, option, optionIndex });
}
</script>

<style scoped>
.--fc-welcome-message-container {
  @apply --fc-shadow-2xl --fc-rounded-2xl --fc-flex --fc-items-end --fc-flex-col;
}
</style>
