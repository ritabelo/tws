import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#1A1A18",
        stone: "#8C8680",
        kraft: "#C4A882",
        sage: "#7A9E7E",
        "sage-light": "#EBF2EC",
        cream: "#F4F0E8",
        "warm-grey": "#E8E4DC",
      },
      fontFamily: {
        display: ["var(--font-poiret)", "serif"],
        sans: ["var(--font-mulish)", "sans-serif"],
        mono: ["var(--font-suse)", "monospace"],
      },
      letterSpacing: {
        ultra: ".3em",
      },
    },
  },
  plugins: [],
};

export default config;
