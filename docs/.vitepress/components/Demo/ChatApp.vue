<template>
  <ChatApp :scripts="demo.scripts" :options="demo.options" />
</template>

<script setup>
import ChatApp from "@/components/ChatApp.vue";
import demo from "../../data/demo-2.js";
</script>
