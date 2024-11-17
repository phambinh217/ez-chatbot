<template>
  <div
    :class="{
      '--fc-message-agent-user': _message.userRole == 'agent',
      '--fc-message-host-user': _message.userRole == 'host',
    }"
  >
    <div class="--fc-message-container">
      <div v-if="_message.userRole == 'host'" class="--fc-message-user">
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
      <template v-if="_message.component">
        <component
          :is="_message.component"
          :message="_message"
          :options="options"
          :class="{
            '--fc-message-shadow': shadow,
          }"
          @select-option="handleSelectOptionInMessage"
        />
      </template>
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
  @apply --fc-w-[30px] --fc-h-[30px] --fc-rounded-full --fc-bg-gray-200;
}

.--fc-message-user .--fc-message-avatar img {
  @apply --fc-w-full --fc-rounded-full;
}

.--fc-message-shadow {
  @apply --fc-shadow-2xl;
}
</style>
