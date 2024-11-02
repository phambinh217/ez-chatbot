import CommonMessage from "@/components/ChatApp/MessageTemplates/CommonMessage.vue";

export default {
  component: CommonMessage,

  isQuestion: true,

  onValidate({ context, answer, script }) {
    if (answer.content.includes('@') == false) {
      const errorMessage = {
        type: 'text',
        position: 'left',
        content: 'Your email seem to be invalid',
        ...script.errorMessage,
      }

      context.addConversationMessage(errorMessage)

      return false
    }

    return true
  },
};
