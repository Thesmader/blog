/** @type {import('tailwindcss').Config} */
const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  "pre code": false,
  "code::before": false,
  "code::after": false,
};
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
      },
    },
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
