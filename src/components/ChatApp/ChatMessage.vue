<template>
  <div
    :class="{
      'chat-message-agent-user': message.position == 'right',
      'chat-message-host-user': message.position == 'left',
    }"
  >
    <div class="chat-message-container">
      <div v-if="message.position == 'left'" class="chat-message-user">
        <div class="chat-message-avatar">
          <img v-if="options?.hostUser?.avatarUrl" :src="options?.hostUser?.avatarUrl" />
        </div>
      </div>
      <div class="chat-message-content-container">
        <div class="chat-message-content-inner">
          <div class="chat-message-text">
            {{ message.content }}
          </div>
          <div v-if="message.options" class="chat-message-option-list">
            <div
              v-for="(option, index) in message.options"
              :key="index"
              class="chat-message-option-item"
              @click="handleSelectOptionInMessage(option, index)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },

  options: {
    type: Object,
    default: () => {},
  }
});

const $emit = defineEmits(["select-option"]);

const handleSelectOptionInMessage = (option, index) => {
  const message = props.message;
  $emit("select-option", { message, option, optionIndex: index });
};
</script>

<style scoped>
.chat-message-host-user {
  @apply tw-self-start;
}

.chat-message-agent-user {
  @apply tw-self-end;
}

.chat-message-container {
  @apply tw-flex tw-flex-row tw-gap-1;
}

.chat-message-user .chat-message-avatar {
  @apply tw-w-[30px] tw-h-[30px] tw-rounded-full tw-bg-gray-200 tw-overflow-hidden;
}

.chat-message-user .chat-message-avatar img {
  @apply tw-w-full;
}

.chat-message-content-container {
  @apply tw-p-3 tw-rounded-2xl tw-gap-3 tw-inline-block;
}

.chat-message-content-inner {
  @apply tw-flex tw-flex-col tw-gap-2;
}

.chat-message-option-list {
  @apply tw-flex tw-flex-row tw-flex-wrap tw-gap-1;
}

.chat-message-option-item {
  @apply tw-py-1 tw-px-3 tw-rounded-full tw-bg-white tw-text-gray-600 tw-text-sm tw-cursor-pointer hover:tw-bg-gray-200 tw-transition-all tw-duration-300;
}

.chat-message-agent-user .chat-message-content-container {
  @apply tw-bg-gray-200;
}

.chat-message-host-user .chat-message-content-container {
  @apply tw-bg-[var(--chat-primary-light-color)];
}

.chat-message-text {
}
</style>
