export default {
  isQuestion: true,

  onValidate({ context, answer, script }) {
    const optionValue = answer.content?.value || answer.content;
    const availableValues = script.options.map(option => option.value || option)

    if (availableValues.includes(optionValue) == false) {
      const errorMessage = {
        type: 'text',
        position: 'left',
        content: 'Your answer seem to be invalid',
        ...script.errorMessage,
      }

      context.addConversationMessage(errorMessage)

      return false
    }

    return true
  },
};
