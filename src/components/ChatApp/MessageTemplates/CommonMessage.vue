<template>
  <div class="--fc-message-content-container" :class="{ '--fc-message-agent-user': message.userRole == 'agent' }">
    <div class="--fc-message-content-inner">
      <div
        class="--fc-message-text"
        v-html="nl2br(message.content?.label || message.content)"
      />
      <div v-if="message.options" class="--fc-message-option-list">
        <div
          v-for="(option, index) in message.options"
          :key="index"
          class="--fc-message-option-item"
          @click="handleSelectOptionInMessage(option, index)"
        >
          {{ option?.label || option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nl2br } from "@/helpers/string";

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },

  options: {
    type: Object,
    default: () => {},
  },
});

const $emit = defineEmits(["select-option"]);

const handleSelectOptionInMessage = (option, index) => {
  const message = props.message;
  $emit("select-option", { message, option, optionIndex: index });
};
</script>

<style scoped>
.--fc-message-content-container {
  @apply --fc-px-3 --fc-py-2 --fc-rounded-2xl --fc-gap-3 --fc-inline-block;
}

.--fc-message-content-container {
  @apply --fc-bg-[var(--fc-primary-color)] --fc-text-[var(--fc-primary-contrast-color)];
}

.--fc-message-content-container.--fc-message-agent-user {
  @apply --fc-bg-[var(--fc-secondary-color)] --fc-text-[var(--fc-secondary-contrast-color)];
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
</style>
