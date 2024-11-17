<template>
  <ChatApp
    v-show="isReady"
    ref="chatAppRef"
    :scripts="activeScripts"
    :options="options"
    @finished="handleFinished"
    @answered="handleAnswered"
  />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { sendRequest } from "@/helpers/googleSheet";
import { isQuestionScript } from "@/helpers/script";
import { mergeDeep } from "@/helpers/object";
import ChatApp from "./ChatApp.vue";

const props = defineProps({
  sheets: {
    type: Object,
    default: () => ({}),
  },
  sheet: {
    type: String,
    default: "default",
  },
  defaultOptions: {
    type: Object,
  },
});

const rawScripts = ref({});
const chatAppRef = ref();

const activeSheet = computed(() => props.sheets[props.sheet]);
const activeScripts = computed(() => rawScripts.value[props.sheet]);
const activeMetadata = computed(() => props.sheets[props.sheet]?.metadata);

const isReady = computed(() => {
  const numberOfSheets = Object.keys(props.sheets).length;

  /**
   * If no sheet is defined, return true
   * Because the form chat can be used without a sheet
   */
  if (numberOfSheets === 0) {
    return true;
  }

  return !!activeScripts.value
});

const options = computed(() => mergeDeep(props.defaultOptions, activeSheet.value?.options));

const fetchScriptsFromGoogleSheet = () => {
  for (const sheet in props.sheets) {
    const sheetConfig = props.sheets[sheet];

    if (!sheetConfig?.url) {
      console.error(`Sheet ${sheet} has no url config`);
      continue;
    }

    sendRequest(sheetConfig?.url, {
      sheetTitle: sheetConfig?.scriptSheet || "scripts",
      command: "LIST_ROWS_COMMAND",
    }).then(({ data }) => {
      rawScripts.value[sheet] = data;
    });
  }
};

onMounted(() => fetchScriptsFromGoogleSheet());

const saveAnswerToGoogleSheet = (id, script) => {
  const data = { id };
  const where = { id };

  /**
   * Add metadata to the data object
   */
  if (activeMetadata.value && activeMetadata.value?.length) {
    for (let i = 0; i < activeMetadata.value.length; i++) {
      const meta = activeMetadata.value[i];
      data[meta.name] = meta.value;
    }
  }

  /**
   * Add answer to the data object
   */
  if (isQuestionScript(script)) {
    data[script.name] = script.answer.content?.value || script.answer.content;
  }

  const payload = {
    command: "UPDATE_OR_CREATE_COMMAND",
    sheetTitle: activeSheet.value?.resultSheet || "results",
    data,
    where,
  };

  return sendRequest(activeSheet.value.url, payload);
};

const handleAnswered = ({ sessionId, data: script }) =>
  saveAnswerToGoogleSheet(sessionId, script);
</script>
