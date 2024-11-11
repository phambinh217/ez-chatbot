---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FormChat"
  text: ""
  tagline: Transform a traditional form to chat box
  actions:
    - theme: brand
      text: Examples
      link: /examples
    - theme: alt
      text: WordPress integration
      link: /examples
    - theme: alt
      text: Shopify integration
      link: /examples

features:
  - title: 10+ Field types
    details: Simle question, long question, radio question, rating, datetime picker,...
  - title: Easy customize
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Perfect responsive
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Lightweight
    details: Only 106 KB js, and 17 KB css before gzip
---

<GoogleSheetFormChat />

<script setup>
// import ChatApp from '.vitepress/components/Demo/ChatApp.vue'
import GoogleSheetFormChat from '.vitepress/components/Demo/GoogleSheetFormChat.vue'
</script>
