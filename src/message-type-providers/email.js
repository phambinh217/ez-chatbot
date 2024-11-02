import CommonMessage from "@/components/ChatApp/MessageTemplates/CommonMessage.vue";

export default {
  component: CommonMessage,

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
