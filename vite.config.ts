import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";
import { defineConfig } from "vite";
import pkg from "./package.json";
import { pluginReadme } from "./plugin-readme";

export default defineConfig({
  base: "/" + pkg.name,
  root: "./tests",
  build: { outDir: "../dist", emptyOutDir: true },
  plugins: [
    pluginReadme({
      title: pkg.name,
      description: pkg.description,
      watchDir: "./tests/examples",
      baseUrl: "https://github.com/metonym/svelte-time/tree/master/",
    }),
    svelte({
      extensions: [".svelte", ".md"],
    }),
  ],
  resolve: {
    alias: { [pkg.name]: path.resolve("./src") },
    conditions: ["browser"],
  },
  test: {
    globals: true,
    silent: !!process.env.CI,
    environment: "jsdom",
  },
});
