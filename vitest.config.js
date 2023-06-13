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
    alias: {
      "svelte-visibility-change": path.resolve("src"),
    },
  },
  test: {
    environment: "jsdom",
  },
};
