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
  @apply --fc-p-4 --fc-flex --fc-flex-row --fc-gap-3;
}

.chat-composer-input {
  @apply --fc-py-2 --fc-rounded-[30px] --fc-bg-white --fc-border --fc-border-gray-300 --fc-border-solid --fc-w-full --fc-px-[20px] --fc-h-[40px] --fc-min-h-[40px] --fc-resize-none --fc-overflow-hidden;
  @apply focus:--fc-ring-0 focus:--fc-outline-none focus:--fc-border-[var(--chat-primary-color)];
}

.chat-composer-submit-button {
  @apply --fc-h-[40px] --fc-w-[40px] --fc-rounded-full --fc-bg-[var(--chat-primary-color)] --fc-text-white --fc-flex --fc-items-center --fc-justify-center;
}

.chat-composer-submit-button .chat-icon {
  @apply --fc-w-5 --fc-h-5 --fc-fill-white;
}
</style>
