<template>
  <div
    class="--fc-message-group"
    :class="{
      '--fc-message-agent-user': firstMessage?.userRole == 'agent',
      '--fc-message-host-user': firstMessage?.userRole == 'host',
    }"
  >
    <div v-if="firstMessage?.userRole == 'host'" class="--fc-message-user">
      <div
        class="--fc-message-avatar"
        :class="{
          '--fc-message-shadow': shadow,
        }"
      >
        <img
          v-if="options?.hostUser?.avatarUrl"
          :src="options?.hostUser?.avatarUrl"
        />
      </div>
    </div>
    <div class="--fc-messages">
      <div
        v-for="(message, index) in _messages"
        :key="index"
        class="--fc-message-item"
      >
        <div
          v-if="message.component"
          class="--fc-message-item-inner"
          :class="{
            '--fc-message-shadow': shadow,
          }"
        >
          <component
            :is="message.component"
            :message="message"
            :options="options"
            @select-option="handleSelectOptionInMessage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { arrFirst } from "@/helpers/arr";
import messageTypeProviders from "@/message-type-providers";
import CommonMessage from "./MessageTemplates/CommonMessage.vue";

const props = defineProps({
  messages: {
    type: Object,
    required: true,
  },

  options: {
    type: Object,
    default: () => {},
  },

  shadow: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["select-option"]);

const _messages = computed(() => {
  return props.messages.map((message) => {
    return {
      component: messageTypeProviders[message.type]?.component || CommonMessage,
      ...message,
    };
  });
});

const firstMessage = computed(() => arrFirst(_messages.value));

const handleSelectOptionInMessage = (payload) => {
  $emit("select-option", payload);
};
</script>

<style scoped>
.--fc-message-host-user {
  @apply --fc-self-start;
}

.--fc-message-agent-user {
  @apply --fc-self-end;
}

.--fc-message-group {
  @apply --fc-flex --fc-flex-row --fc-gap-1;
}

.--fc-messages {
  @apply --fc-flex --fc-flex-col --fc-gap-1;
}

.--fc-message-item .--fc-message-item-inner {
  @apply --fc-bg-[var(--fc-primary-color)] --fc-text-[var(--fc-primary-contrast-color)];
  @apply --fc-px-3 --fc-py-2 --fc-gap-3 --fc-inline-flex;
  @apply --fc-rounded-tr-3xl --fc-rounded-br-3xl;
  @apply --fc-rounded-tl-lg --fc-rounded-bl-lg;
}

.--fc-message-item:first-child .--fc-message-item-inner {
  @apply --fc-rounded-tl-3xl;
}

.--fc-message-item:last-child .--fc-message-item-inner {
  @apply --fc-rounded-bl-3xl;
}

.--fc-message-agent-user .--fc-message-item .--fc-message-item-inner {
  @apply --fc-bg-[var(--fc-secondary-color)] --fc-text-[var(--fc-secondary-contrast-color)];
  @apply --fc-rounded-tl-3xl --fc-rounded-bl-3xl;
  @apply --fc-rounded-tr-lg --fc-rounded-br-lg;
}

.--fc-message-agent-user
  .--fc-message-item:first-child
  .--fc-message-item-inner {
  @apply --fc-rounded-tr-3xl;
}

.--fc-message-agent-user
  .--fc-message-item:last-child
  .--fc-message-item-inner {
  @apply --fc-rounded-br-3xl;
}

.--fc-message-agent-user .--fc-messages {
  @apply --fc-items-end;
}

.--fc-message-user .--fc-message-avatar {
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-200;
}

.--fc-message-user .--fc-message-avatar img {
  @apply --fc-w-full --fc-rounded-full;
}

.--fc-message-shadow {
  @apply --fc-shadow-2xl;
}
</style>
