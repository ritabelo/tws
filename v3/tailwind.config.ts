import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          offwhite: "#F7F5F0",
          sage: "#8DA399",
          sand: "#E6D5C7",
          stone: "#D9D5CD",
          charcoal: "#333333",
          lavender: "#B5AAB6",
          kraft: "#C1A68D",
        },
      },
      fontFamily: {
        sans: ["var(--font-mulish)"],
        display: ["var(--font-poiret-one)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;