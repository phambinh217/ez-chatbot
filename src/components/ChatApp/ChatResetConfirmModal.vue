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
  @apply --fc-px-3 --fc-py-1 --fc-text-[var(--chat-primary-color)] --fc-rounded-full;
  @apply --fc-border --fc-border-solid --fc-border-[var(--chat-primary-color)] --fc-bg-white --fc-shadow --fc-text-xs;
}

.chat-negative-button {
  @apply --fc-px-3 --fc-py-1 --fc-text-[var(--chat-primary-color)] --fc-rounded-full;
  @apply --fc-border --fc-border-solid --fc-border-[var(--chat-primary-color)] --fc-bg-white --fc-shadow --fc-text-xs;
}

.chat-modal-container {
  @apply --fc-bg-white --fc-rounded --fc-w-[90%] --fc-shadow;
}

.chat-modal-title {
  @apply --fc-p-4 --fc-text-center --fc-text-lg --fc-font-bold;
}

.chat-modal-actions {
  @apply --fc-p-4 --fc-flex --fc-items-center --fc-justify-center --fc-gap-2;
}
</style>
