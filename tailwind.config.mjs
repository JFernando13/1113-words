import animated from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e4e6ee",
          200: "#B8BED3",
          300: "#8D97B8",
          400: "#667296",
          500: "#47506A",
          600: "#2A3041",
          700: "#0F121B",
        },
        secondary: {
          100: "#E0E1EA",
          200: "#B5B9CE",
          300: "#8B93B2",
          400: "#656E91",
          500: "#454C65",
          600: "#282C3D",
          700: "#0C0E16",
        },
        gray: {
          100: "#BEBEC0",
          200: "#E6E6E7",
          300: "#97979B",
          400: "#727278",
          500: "#505055",
          600: "#303033",
          700: "#121214",
        },
      },
      boxShadow: {
        "card-primary": `0px 2.317px 1.854px 0px rgba(0, 0, 0, 0.04), 
													0px 5.388px 4.31px 0px rgba(0, 0, 0, 0.05), 
													0px 9.675px 7.74px 0px rgba(0, 0, 0, 0.05), 
													0px 16.057px 12.846px 0px rgba(0, 0, 0, 0.04), 
													0px 26.453px 21.163px 0px rgba(0, 0, 0, 0.03), 
													0px 46.233px 36.986px 0px rgba(0, 0, 0, 0.03), 
													0px 100px 80px 0px rgba(0, 0, 0, 0.07);`,
        inner: "0px 0px 8px 4px #1d222f inset",
      },
    },
  },
  plugins: [animated],
};
