<template>
  <div
    class="chat-conversation-container"
    ref="conversationMessagesRef"
    @scroll="handleScrollConversation"
  >
    <div class="chat-conversation-padding" />
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";

const conversationMessagesRef = ref();

const handleScrollConversation = () => {
  const chatWindow = conversationMessagesRef.value;
  const scrollTop = chatWindow.scrollTop;
  const scrollHeight = chatWindow.scrollHeight;
  const clientHeight = chatWindow.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    // handle when user scroll to end
  }

  if (scrollTop === 0) {
    // handle when user scroll to top
  }
};

const scrollToBottom = () => {
  conversationMessagesRef.value.scrollTo({
    top: conversationMessagesRef.value.scrollHeight,
    behavior: "smooth",
  });
};

defineExpose({
  scrollToBottom,
});
</script>

<style scoped>
.chat-conversation-container {
  @apply tw-flex tw-flex-col tw-gap-4 tw-max-h-[500px] tw-min-h-[500px] tw-overflow-auto tw-px-4;
}

.chat-conversation-padding {
  @apply tw-p-1;
}
</style>
