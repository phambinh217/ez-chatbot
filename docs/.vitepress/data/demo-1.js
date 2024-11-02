export default {
  scripts: [
    {
      content:
        "Xin chào, mình là Bình. Mình có cung cấp dịch vụ lấy dữ liệu từ các website thương mại điện tử như Shopee, Temu, AliExpress, Amazone, hoặc các website chạy trên các nền tảng như Shopify, Sapo, Haravan",
    },

    {
      content: "Địa chỉ email của bạn là gì nhỉ?",
      type: "email",
      skippable: true,
      errorMessage: {
        content: "Hình như địa chỉ email của bạn chưa chính xác",
      },
    },

    {
      content:
        "Hiện mình đã có sẵn công cụ để lấy, bạn chỉ cần gửi cho mình địa chỉ website, hoặc danh sách sản phẩm cần lấy là được.",
    },

    {
      type: "question",
      content: "Website bạn muốn lấy dữ liệu, là nền tảng nào?",

      options: [
        "Shopee",
        "Temu",
        "AliExpress",
        "Amazone",
        "Shopify",
        "Sapo",
        "Haravan",
        "Nền tảng khác",
      ],

      next: (context, option) =>
        new Promise((resolve, reject) => {
          if (["Shopee", "Temu", "AliExpress", "Amazone"].includes(option)) {
            return resolve(1);
          }

          if (["Shopify", "Sapo", "Haravan"].includes(option)) {
            return resolve(2);
          }

          if (["Nền tảng khác"].includes(option)) {
            return resolve(3);
          }

          context.addConversationMessage({
            position: "left",
            type: "text",
            content: "Bạn hãy giúp mình chọn một trong số cá lựa chọn trên nhé",
          });

          return reject();
        }),
    },

    {
      id: 1,
      type: "question",
      content:
        "Bạn muốn lấy các sản phẩm nào? Bạn có thể gửi cho mình cụ thể các sản phẩm bạn muốn lấy, hoặc mô tả cho mình các sản phẩm bạn muốn lấy. Ví dụ như lấy các sản phẩm thuộc danh mục quần áo nam, hoặc các sản phẩm có hashtag là xuhuong",
      longAnswer: true,
      next: 4,
    },

    {
      id: 2,
      type: "question",
      content: "Cho mình địa chỉ website bạn muốn lấy dữ liệu",
      next: 4,
    },

    {
      id: 3,
      type: "question",
      content:
        "Cũng đừng lo lắng, mình vấn có thể làm riêng cho bạn, hãy cho mình biết website bạn muốn lấy dữ liệu là website nào. Bạn có thể mô tả hoặc gửi link website cũng được",
      next: 4,
    },

    {
      id: 4,
      content: "Cám ơn bạn, mình đã nhận được thông tin",
    },

    {
      type: "question",
      content: "Để tiện xưng hô, thì tên bạn là gì nhỉ?",
    },

    {
      type: "question",
      content:
        "Cho mình xin số điện thoại của bạn nữa được không, để nếu chần chat nhanh, mình sẽ liên hệ với bạn qua Zalo",
      skipText: "Tôi không có zalo",
      skippable: true,
    },

    {
      type: "question",
      content:
        "Cho mình biết cả địa chỉ email của bạn nữa nhé, nếu cần gửi file nặng, hoặc chia sẻ quyền vào Google Drive của mình, mình sẽ sử dụng email này",
      next: (context, answer) =>
        new Promise((resolve, reject) => {
          if (!answer.includes("@")) {
            context.addConversationMessage({
              position: "left",
              content: "Hình như bạn nhập sai địa chỉ email",
              type: "text",
            });

            return reject();
          }

          return resolve();
        }),
    },

    {
      content:
        "Cám ơn bạn, mình đã có đủ thông tin, nếu bạn muốn mình lưu ý thêm thông tin gì, thì cứ chat tiếp nhé. Nếu không, thì hãy đợi mình liên hệ lại. Chúc bạn một ngày vui vẻ",
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
  },

  translation: {
    vi: {},
  },
};
