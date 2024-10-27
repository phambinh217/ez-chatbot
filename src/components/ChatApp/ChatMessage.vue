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
  @apply --fc-self-start;
}

.chat-message-agent-user {
  @apply --fc-self-end;
}

.chat-message-container {
  @apply --fc-flex --fc-flex-row --fc-gap-1;
}

.chat-message-user .chat-message-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-200 --fc-overflow-hidden;
}

.chat-message-user .chat-message-avatar img {
  @apply --fc-w-full;
}

.chat-message-content-container {
  @apply --fc-p-3 --fc-rounded-2xl --fc-gap-3 --fc-inline-block;
}

.chat-message-content-inner {
  @apply --fc-flex --fc-flex-col --fc-gap-2;
}

.chat-message-option-list {
  @apply --fc-flex --fc-flex-row --fc-flex-wrap --fc-gap-1;
}

.chat-message-option-item {
  @apply --fc-py-1 --fc-px-3 --fc-rounded-full --fc-bg-white --fc-text-gray-600 --fc-text-sm --fc-cursor-pointer hover:--fc-bg-gray-200 --fc-transition-all --fc-duration-300;
}

.chat-message-agent-user .chat-message-content-container {
  @apply --fc-bg-gray-200;
}

.chat-message-host-user .chat-message-content-container {
  @apply --fc-bg-[var(--chat-primary-light-color)];
}

.chat-message-text {
}
</style>
