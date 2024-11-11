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

export const scriptFactory = (script) => {
  if (script?.options) {
    /**
     * If options is a string, convert it to an array
     */
    if (typeof script.options == "string") {
      script.options = script.options.split(",").map((option) => option.trim());
    }
  }

  return {
    id: randomString(),
    type: "text",
    skippable: false,
    skipText: "Skip",
    longAnswer: false,
    content: "",
    answer: messageFactory(),
    ...script,
  };
};
