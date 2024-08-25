// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Порт вашего backend сервера
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
