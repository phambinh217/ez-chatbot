export default {
  scripts: [
    // {
    //   content: "Địa chỉ email của bạn là gì nhỉ?",
    //   type: "email",
    //   errorMessage: {
    //     content: "Hình như địa chỉ email của bạn chưa chính xác",
    //   },
    // },

    {
      type: "question",
      content: "Tên bạn là gì nhỉ",
      name: "full_name",
    },

    {
      content: "Bạn sinh năm bao nhiêu",
      name: "age",
      type: "select",
      options: [1996, 1997, 1998, 1999, 2000],
    },

    {
      content: "Cảm ơn bạn đã cung cấp thông tin",
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
      theme: "dark",
      primaryColor: "#06b6d4",
      primaryLightColor: "#a5f3fc",

      chatWindow: {
        backgroundImage:
          "url(https://wallpapers.com/images/hd/whatsapp-chat-background-fb34cc4b2hg9lmix.jpg)",
        backgroundSize: "contain",
      },
    },

    plugins: {
      googleSheet: {
        url: "https://script.google.com/macros/s/AKfycbxPp0oSxDWLM_jDn85fGc4dEAe0AtgaeYNZJixO49LJfBMSKlDicu2zm2qgzz49-UM9/exec",
        sheet: 'default',
      },
    },
  },
};
