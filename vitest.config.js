import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess"

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [preprocess()],
      hot: !process.env.VITEST,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
