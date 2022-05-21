/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      context: path.resolve(__dirname, "./src/context"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
