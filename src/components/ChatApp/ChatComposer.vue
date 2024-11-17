<template>
  <div class="--fc-composer-container">
    <textarea
      v-if="longMessage"
      :value="message"
      class="--fc-composer-input"
      :placeholder="placeholder"
      ref="inputRef"
      @input="handleInputMessage"
    />
    <input
      v-else
      :value="message"
      ref="inputRef"
      class="--fc-composer-input"
      :placeholder="placeholder"
      @input="handleInputMessage"
      @keydown.enter="handlePressEnterButton"
    />
    <div>
      <button class="--fc-composer-submit-button" @click="handleSubmitMessage">
        <SendIcon class="--fc-icon" />
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
.--fc-composer-container {
  @apply --fc-p-4 --fc-flex --fc-flex-row --fc-gap-3;
}

.--fc-composer-input {
  @apply --fc-bg-[var(--fc-secondary-color)] --fc-text-[var(--fc-secondary-contrast-color)] placeholder:--fc-text-[var(--fc-secondary-contrast-color)];
  @apply --fc-py-2 --fc-rounded-lg --fc-border-none --fc-w-full --fc-px-[20px] --fc-h-[40px] --fc-min-h-[40px] --fc-resize-none --fc-overflow-hidden;
  @apply focus:--fc-ring-0 focus:--fc-outline-none focus:--fc-border-[var(--fc-primary-color)];
}

.--fc-composer-submit-button {
  @apply --fc-h-[40px] --fc-w-[40px] --fc-rounded-full --fc-bg-[var(--fc-primary-color)] --fc-text-white --fc-flex --fc-items-center --fc-justify-center;
  @apply --fc-border-0;
}

.--fc-composer-submit-button .--fc-icon {
  @apply --fc-w-5 --fc-h-5 --fc-fill-[var(--fc-primary-contrast-color)];
}
</style>
