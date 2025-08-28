import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palettePrimary: "#121D2C",
        paletteRegular: "#1369D9",
        paletteLight: "#C2D9F8",
        paletteUltraLight: "#DCE9F9",

        greyMain: "#F5F7FA",
        greyRegular: "#E0E8F2",
        greyRegularDarken: "#D8E1EA",
        greyDark: "#E8EBF0",
        greyText: "#898E96",
        greyShadow: "#E4E6E8",

        errorLight: "#FAD4D4",
        errorRegular: "#E53935",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        icon: ["icon", "sans-serif"],
      },
      spacing: {
        small: "6px",
        standard: "12px",
        big: "16px",
        "formElement-s": "29px",
        "formElement-m": "40px",
      },
      boxShadow: {
        focusLight: "0 0 0 4px theme(colors.paletteLight)",
        light: "0px 1px 4px #E4E6E8",
        "light-big": "0px 4px 6px #E4E6E8",
      },
    },
  },
  plugins: [],
} satisfies Config;
