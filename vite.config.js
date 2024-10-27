import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: `form-chat/form-chat.js`,
        chunkFileNames: `form-chat/form-chat.js`,
        assetFileNames: `form-chat/form-chat.[ext]`
      }
    }
  }
});
