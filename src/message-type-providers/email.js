import TextMessage from "@/components/ChatApp/MessageTypes/TextMessage.vue";

export default {
  component: TextMessage,

  isQuestion: true,

  onValidate({ context, answer }) {
    if (answer.content.includes('@') == false) {
      context.addConversationMessages({
        type: 'text',
        position: 'left',
        content: 'Hình như bạn nhập sai địa chỉ email thì phải',
      })

      return false
    }

    return true
  },
};
