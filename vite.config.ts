/// <reference types="vitest/globals" />
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    svelte({
      preprocess: [vitePreprocess()],
      hot: false,
    }),
  ],
  resolve: {
    conditions: ["browser"],
    alias: {
      "svelte-visibility-change": path.resolve("src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
};
