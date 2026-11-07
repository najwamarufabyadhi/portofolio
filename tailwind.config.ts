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
        obsidian: {
          DEFAULT: "#060B11",
          deep: "#020406",
          surface: "rgba(15, 39, 68, 0.25)",
          border: "#172A3D",
        },
        crimson: {
          DEFAULT: "#8C1123",
          dark: "#6B0D1A",
          light: "#A3162A",
          glow: "rgba(140, 17, 35, 0.35)",
        },
        abyssal: {
          DEFAULT: "#1E4E7A",
          deep: "#0F2744",
          light: "#2B6CA8",
        },
        ice: {
          DEFAULT: "#79C0FF",
          glow: "#58A6FF",
          dim: "rgba(121, 192, 255, 0.15)",
        },
        text: {
          main: "#E6EDF3",
          muted: "#8B949E",
          dim: "#525D69",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "Impact", "sans-serif"],
        arcade: ["var(--font-orbitron)", "monospace"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "arcade-glow": "0 0 25px rgba(121, 192, 255, 0.25)",
        "crimson-glow": "0 0 35px rgba(140, 17, 35, 0.4)",
        "blue-halo": "0 0 70px rgba(30, 78, 122, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

