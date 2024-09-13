import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#4257ff",
        'pastel-yellow': '#feffdb',
        'pastel-red': '#ffd6d6',
        'pastel-blue': '#cfe1ff',
        'pastel-blue-2': '#d9ddff',
        'pastel-light-blue': '#ecf3ff',
        'pastel-purple': '#e4c1f9',
        'pastel-gray': '#edede9',
      },
      dropShadow: {
        'card': '0 0 1px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
};
export default config;
