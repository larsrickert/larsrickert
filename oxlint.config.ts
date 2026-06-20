import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    perf: "warn",
    suspicious: "warn",
  },
  env: {
    browser: true,
  },
  plugins: ["eslint", "typescript", "unicorn", "oxc", "vue"],
});
