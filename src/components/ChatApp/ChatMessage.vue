<template>
  <div
    :class="{
      '--fc-message-agent-user': _message.userRole == 'agent',
      '--fc-message-host-user': _message.userRole == 'host',
      '--fc-message-shadow': shadow,
    }"
  >
    <div class="--fc-message-container">
      <div v-if="_message.userRole == 'host'" class="--fc-message-user">
        <div class="--fc-message-avatar">
          <img
            v-if="options?.hostUser?.avatarUrl"
            :src="options?.hostUser?.avatarUrl"
          />
        </div>
      </div>
      <div class="--fc-message-content-container">
        <template v-if="_message.component">
          <component
            :is="_message.component"
            :message="_message"
            :options="options"
            @select-option="handleSelectOptionInMessage"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import messageTypeProviders from "@/message-type-providers";
import CommonMessage from "./MessageTemplates/CommonMessage.vue";

const props = defineProps({
  message: {
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

const _message = computed(() => {
  return {
    component:
      messageTypeProviders[props.message.type]?.component || CommonMessage,
    ...props.message,
  };
});

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
  @apply --fc-px-3 --fc-py-2 --fc-rounded-2xl --fc-gap-3 --fc-inline-block;
  @apply --fc-bg-[var(--fc-primary-light-color)];
}

.--fc-message-agent-user .--fc-message-content-container {
  @apply --fc-bg-gray-200;
}

.--fc-message-shadow .--fc-message-avatar,
.--fc-message-shadow .--fc-message-content-container {
  @apply --fc-shadow-2xl;
}
</style>
