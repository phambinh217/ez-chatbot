<template>
  <TheModal :open="open">
    <div class="chat-modal-container">
      <div class="chat-modal-title">
        Are you sure to restart the chat?
      </div>
      <div class="chat-modal-actions">
        <button class="chat-negative-button" @click="handleClickYesButton">
          Yes
        </button>
        <button class="chat-default-button" @click="handleClickNoButton">
          No
        </button>
      </div>
    </div>
  </TheModal>
</template>

<script setup>
import TheModal from "./TheModal.vue";

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["update:open", "confirmed"]);

const handleClickYesButton = () => {
  $emit("confirmed");
};

const handleClickNoButton = () => {
  $emit("update:open", false);
};
</script>

<style setup>
.chat-default-button {
  @apply tw-px-3 tw-py-1 tw-text-[var(--chat-primary-color)] tw-rounded-full;
  @apply tw-border tw-border-solid tw-border-[var(--chat-primary-color)] tw-bg-white tw-shadow tw-text-xs;
}

.chat-negative-button {
  @apply tw-px-3 tw-py-1 tw-text-[var(--chat-primary-color)] tw-rounded-full;
  @apply tw-border tw-border-solid tw-border-[var(--chat-primary-color)] tw-bg-white tw-shadow tw-text-xs;
}

.chat-modal-container {
  @apply tw-bg-white tw-rounded tw-w-[90%] tw-shadow;
}

.chat-modal-title {
  @apply tw-p-4 tw-text-center tw-text-lg tw-font-bold;
}

.chat-modal-actions {
  @apply tw-p-4 tw-flex tw-items-center tw-justify-center tw-gap-2;
}
</style>
