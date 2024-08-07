/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 20px 1px #cacaca40",
      },
    },
  },
  plugins: [],
};
