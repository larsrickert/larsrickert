import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    perf: "warn",
    style: "warn",
    suspicious: "warn",
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ["nuxt.config.ts"],
      rules: {
        "sort-keys": "off",
      },
    },
  ],
  plugins: ["eslint", "typescript", "unicorn", "oxc", "vue"],
});
