<template>
  <TheModal :open="open">
    <div class="--fc-modal-container">
      <div class="--fc-modal-title">
        Are you sure to restart the chat?
      </div>
      <div class="--fc-modal-actions">
        <button class="--fc-negative-button" @click="handleClickYesButton">
          Yes
        </button>
        <button class="--fc-default-button" @click="handleClickNoButton">
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
.--fc-modal-actions button {
  @apply --fc-px-3 --fc-py-1 --fc-text-[var(--fc-primary-color)] --fc-rounded-full;
}

.--fc-default-button {
  @apply --fc-border --fc-border-solid --fc-border-[var(--fc-primary-color)] --fc-bg-white --fc-shadow --fc-text-xs;
}

.--fc-negative-button {
  @apply --fc-border --fc-border-solid --fc-border-[var(--fc-primary-color)] --fc-bg-white --fc-shadow --fc-text-xs;
}

.--fc-modal-container {
  @apply --fc-bg-white --fc-rounded --fc-w-[90%] --fc-shadow;
}

.--fc-modal-title {
  @apply --fc-p-4 --fc-text-center --fc-text-lg --fc-font-bold;
}

.--fc-modal-actions {
  @apply --fc-p-4 --fc-flex --fc-items-center --fc-justify-center --fc-gap-2;
}
</style>
