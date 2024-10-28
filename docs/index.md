---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FormChat"
  text: ""
  tagline: Transform a traditional form to chat box
  actions:
    - theme: brand
      text: Try demo
      link: /markdown-examples
    - theme: alt
      text: Getting started
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit very good 1
---

<ChatApp />

<script setup>
import ChatApp from '.vitepress/components/Demo/ChatApp.vue'
</script>
