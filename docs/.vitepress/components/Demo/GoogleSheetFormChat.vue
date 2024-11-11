<template>
  <GoogleSheetFormChat
    :sheet="sheet"
    :sheets="sheets"
    :default-options="options"
  />
</template>

<script setup>
import GoogleSheetFormChat from "@/components/GoogleSheetFormChat.vue";

const sheet = "booking";

const sheets = {
  booking: {
    // https://docs.google.com/spreadsheets/d/1Xb4U-rwsOaqVWrhZdodzadDk4_tafdxlBBpNObRUlX4/edit?gid=0#gid=0
    url: "https://script.google.com/macros/s/AKfycbx8MnFUdN9XGwVDvFr18kP03eeSVoebG10bSWlFjoxlYPHIYh-cgnjBZBr_O8ffn8Np/exec",
    metadata: [
      {
        name: "product_id",
        value: 1,
      },
    ]
  },
};

const options = {
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
};
</script>
