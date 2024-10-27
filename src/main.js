import "./assets/chat.css";

import { createApp } from "vue";

import ChatApp from "./components/ChatApp.vue";

window.createFormChat = (el, props) => {
  const app = createApp(ChatApp, props);
  return app.mount(el)
};
