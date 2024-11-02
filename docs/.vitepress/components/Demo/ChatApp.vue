<template>
  <ChatApp :scripts="demo1.scripts" :options="demo1.options" />
</template>

<script setup>
import ChatApp from "@/components/ChatApp.vue";
import demo1 from "../../data/demo-1.js";
</script>
