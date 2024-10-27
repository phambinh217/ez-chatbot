import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path'
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
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.js'),
      name: 'FormChat',
      // the proper extensions will be added
      fileName: 'form-chat',
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },

    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, "index.html"),
    //     "form-chat": resolve(__dirname, "form-chat.html"),
    //   },
    //   output: {
    //     entryFileNames: `app/[name].js`,
    //     chunkFileNames: `app/[name].js`,
    //     assetFileNames: `app/[name].[ext]`,
    //   },
    // },
  },
});
