import emailTypeProvider from "@/message-type-providers/email";
import questionTypeProvider from "@/message-type-providers/question";
import textTypeProvider from "@/message-type-providers/text";

export default {
  text: textTypeProvider,
  email: emailTypeProvider,
  question: questionTypeProvider,
}
