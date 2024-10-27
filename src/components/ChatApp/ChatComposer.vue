<template>
  <div class="chat-composer-container">
    <textarea
      v-if="longMessage"
      :value="message"
      class="chat-composer-input"
      :placeholder="placeholder"
      ref="inputRef"
      @input="handleInputMessage"
    />
    <input
      v-else
      :value="message"
      ref="inputRef"
      class="chat-composer-input"
      :placeholder="placeholder"
      @input="handleInputMessage"
      @keydown.enter="handlePressEnterButton"
    />
    <div>
      <button class="chat-composer-submit-button" @click="handleSubmitMessage">
        <SendIcon class="chat-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import SendIcon from '../../assets/svgIcons/send.svg';

const props = defineProps({
  message: {
    type: String,
    required: "",
  },

  options: {
    type: Object,
    default: () => {},
  },

  longMessage: {
    type: Boolean,
    default: false,
  },
});

const $emit = defineEmits(["update:message", "submit"]);
const inputRef = ref();

const placeholder = computed(
  () => props.options?.placeholder || "Type a message"
);

const handleSubmitMessage = () => {
  $emit("submit");
};

const handlePressEnterButton = () => {
  $emit("submit");
};

const handleInputMessage = (event) => {
  const value = event.target.value;
  $emit("update:message", value);
};

watch(
  () => props.message,
  () => {
    /**
     * Set auto height
     */
    const element = inputRef.value;
    element.style.height = "40px";
    element.style.height = element.scrollHeight + "px";
  }
);
</script>

<style scoped>
.chat-composer-container {
  @apply tw-p-4 tw-flex tw-flex-row tw-gap-3;
}

.chat-composer-input {
  @apply tw-py-2 tw-rounded-[30px] tw-bg-white tw-border tw-border-gray-300 tw-border-solid tw-w-full tw-px-[20px] tw-h-[40px] tw-min-h-[40px] tw-resize-none tw-overflow-hidden;
  @apply focus:tw-ring-0 focus:tw-outline-none focus:tw-border-[var(--chat-primary-color)];
}

.chat-composer-submit-button {
  @apply tw-h-[40px] tw-w-[40px] tw-rounded-full tw-bg-[var(--chat-primary-color)] tw-text-white tw-flex tw-items-center tw-justify-center;
}

.chat-composer-submit-button .chat-icon {
  @apply tw-w-5 tw-h-5 tw-fill-white;
}
</style>
