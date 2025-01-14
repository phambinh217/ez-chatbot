import { defineConfig } from "vitepress";
import svgLoader from "vite-svg-loader";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      svgLoader(),
    ],

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },

  title: "FormChat",
  description: "FormChat",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        link: "/examples"
      },
      {
        text: "Getting started",
        link: "/getting-started"
      },
      {
        text: "Field types",
        link: "/field-types"
      },
      {
        text: "Digging Deeper",
        link: "/field-types"
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/phambinh217/formchat" },
    ],
  },
});
