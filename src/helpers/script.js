import messageTypeProviders from "@/message-type-providers";

export const isQuestionScript = (script) => {
  const scriptType = script.type;
  const messageProvider = messageTypeProviders[scriptType] || null;

  if (!messageProvider) {
    return false;
  }

  /**
   * !! to force convert to boolean
   */
  return !!messageProvider?.isQuestion;
};
