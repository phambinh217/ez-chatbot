<template>
  <div
    :class="{
      '--fc-message-agent-user': message.position == 'right',
      '--fc-message-host-user': message.position == 'left',
    }"
  >
    <div class="--fc-message-container">
      <div v-if="message.position == 'left'" class="--fc-message-user">
        <div class="--fc-message-avatar">
          <img v-if="options?.hostUser?.avatarUrl" :src="options?.hostUser?.avatarUrl" />
        </div>
      </div>
      <div class="--fc-message-content-container">
        <div class="--fc-message-content-inner">
          <div class="--fc-message-text">
            {{ message.content }}
          </div>
          <div v-if="message.options" class="--fc-message-option-list">
            <div
              v-for="(option, index) in message.options"
              :key="index"
              class="--fc-message-option-item"
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
.--fc-message-host-user {
  @apply --fc-self-start;
}

.--fc-message-agent-user {
  @apply --fc-self-end;
}

.--fc-message-container {
  @apply --fc-flex --fc-flex-row --fc-gap-1;
}

.--fc-message-user .--fc-message-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-200 --fc-overflow-hidden;
}

.--fc-message-user .--fc-message-avatar img {
  @apply --fc-w-full;
}

.--fc-message-content-container {
  @apply --fc-p-3 --fc-rounded-2xl --fc-gap-3 --fc-inline-block;
}

.--fc-message-content-inner {
  @apply --fc-flex --fc-flex-col --fc-gap-2;
}

.--fc-message-option-list {
  @apply --fc-flex --fc-flex-row --fc-flex-wrap --fc-gap-1;
}

.--fc-message-option-item {
  @apply --fc-py-1 --fc-px-3 --fc-rounded-full --fc-bg-white --fc-text-gray-600 --fc-text-sm --fc-cursor-pointer hover:--fc-bg-gray-200 --fc-transition-all --fc-duration-300;
}

.--fc-message-agent-user .--fc-message-content-container {
  @apply --fc-bg-gray-200;
}

.--fc-message-host-user .--fc-message-content-container {
  @apply --fc-bg-[var(--fc-primary-light-color)];
}

.--fc-message-text {
}
</style>
