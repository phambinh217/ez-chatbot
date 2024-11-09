import { randomString } from "./string";

export const messageFactory = (message) => ({
  id: null,
  userRole: "host",
  type: "text",
  content: "",
  options: null,
  scriptId: null,
  ...message,
});

export const scriptFactory = (script) => ({
  id: randomString(),
  type: "text",
  skippable: false,
  skipText: "Skip",
  longAnswer: false,
  content: "",
  answer: messageFactory(),
  ...script,
});
