<template>
  <div class="--fc-welcome-message-container">
    <ChatMessage
      :message="message"
      :options="options"
      shadow
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
  },

  options: {
    type: Object,
    default: () => {},
  },
})

const $emit = defineEmits(["select-option"]);

const handleSelectOptionInMessage = ({ message, option, optionIndex }) => {
  $emit("select-option", { message, option, optionIndex });
}
</script>

<style scoped>
.--fc-welcome-message-container {
  @apply --fc-flex --fc-justify-end --fc-flex-row;
}
</style>
