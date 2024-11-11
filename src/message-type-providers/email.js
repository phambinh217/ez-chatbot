export default {
  isQuestion: true,

  onValidate({ context, answer, script }) {
    if (answer.content.includes('@') == false) {
      const errorMessage = {
        type: 'text',
        userRole: "host",
        content: 'Your email seem to be invalid',
        ...script.errorMessage,
      }

      context.addConversationMessage(errorMessage)

      return false
    }

    return true
  },
};
