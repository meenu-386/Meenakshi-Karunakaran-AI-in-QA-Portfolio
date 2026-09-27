import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "#0a0e0f",
        panel: "#12181a",
        border: {
          DEFAULT: "#232c2e",
          strong: "#333f42",
        },
        accent: {
          DEFAULT: "#00c2a8",
          dim: "#00a390",
        },
        alert: "#ff6b5e",
      },
    },
  },
  plugins: [],
};
export default config;
