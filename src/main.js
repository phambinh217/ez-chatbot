import { createApp } from "vue";
import App from "./components/GoogleSheetFormChat.vue";

window.createFormChat = (el, props) => {
  const app = createApp(App, props);
  return app.mount(el)
};
