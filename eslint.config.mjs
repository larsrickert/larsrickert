// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  // Your custom configs here
  {
    files: ["**/*.vue"],
    rules: {
      // see https://eslint.vuejs.org/rules/html-self-closing
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
        },
      ],
    },
  },
]);
