import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8CBE06",
        base: "#343333",
        accent: "#1F1F1F",
        border: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
