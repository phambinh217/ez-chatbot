<template>
  <ChatApp :scripts="demo.scripts" :options="demo.options" @finished="handleFinished" />
</template>

<script setup>
import ChatApp from "@/components/ChatApp.vue";
import demo from "../../data/demo-2.js";


const handleFinished = (data) => {
  console.log(data);
}
</script>
