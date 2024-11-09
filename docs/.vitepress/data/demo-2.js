export default {
  scripts: [
    {
      name: "full_name",
      type: "question",
      content: "Tên bạn là gì nhỉ",
    },

    {
      name: "age",
      content: "Bạn sinh năm bao nhiêu",
      type: "select",
      options: [1996, 1997, 1998, 1999, 2000],
    },

    {
      name: "email",
      content: "Địa chỉ email của bạn là gì nhỉ?",
      type: "email",
      errorMessage: {
        content: "Hình như địa chỉ email của bạn chưa chính xác",
      },
    },

    {
      content: "Cảm ơn bạn đã cung cấp thông tin",
    },
  ],

  metadata: [
    {
      name: 'product_id',
      value: 1,
    },
  ],

  options: {
    hostUser: {
      name: "Phạm Bình",
      avatarUrl: "/images/phambinh.jpeg",
    },

    placeholder: "Type your message here...",

    closeButton: true,
    toggleButton: true,
    resetButton: true,
    clickOutSideClose: true,
    welcomeMessage: true,

    styles: {
      // theme: "dark",
      primaryColor: "#06b6d4",
      primaryLightColor: "#a5f3fc",

      // chatWindow: {
      //   backgroundImage:
      //     "url(https://wallpapers.com/images/hd/whatsapp-chat-background-fb34cc4b2hg9lmix.jpg)",
      //   backgroundSize: "contain",
      // },
    },

    plugins: {
      googleSheet: {
        /**
         * https://docs.google.com/spreadsheets/d/1Xb4U-rwsOaqVWrhZdodzadDk4_tafdxlBBpNObRUlX4/edit?gid=0#gid=0
         */
        url: "https://script.google.com/macros/s/AKfycbxqYganu344Hh0Gxo2arKRrDiQ3gBoOhYhgUMqeOic959oExL4j1X3V2dndBtz7Pkiz/exec",
        sheet: "default",
      },
    },
  },
};
