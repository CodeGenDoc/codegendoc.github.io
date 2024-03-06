/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  indent_style: "space",
  indent_size: 2,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
