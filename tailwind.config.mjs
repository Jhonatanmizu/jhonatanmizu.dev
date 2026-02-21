/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#8CAAEE",
        secondary: "#232634",
        tertiary: "#626880",
        fontColor: "#C6D0F5",
        accent: "#6E8FFF",
        dark: "#1A202C",
        light: "#F7FAFC",
        base: "#303446",
        base_alt: "#232634",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
