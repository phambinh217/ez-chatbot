<template>
  <div
    class="--fc-conversation-container"
    ref="conversationMessagesRef"
    @scroll="handleScrollConversation"
  >
    <div class="--fc-conversation-padding" />
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
.--fc-conversation-container {
  @apply --fc-flex --fc-flex-col --fc-gap-4 --fc-max-h-[500px] --fc-min-h-[500px] --fc-overflow-auto --fc-px-4;
}

.--fc-conversation-padding {
  @apply --fc-p-1;
}
</style>
