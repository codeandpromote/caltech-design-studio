import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0a0a",
          800: "#121212",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2c2c2c",
        },
        bone: {
          50: "#faf7f2",
          100: "#f1ece2",
          200: "#e6dfd0",
          300: "#cfc6b3",
        },
        gold: {
          50: "#fbf4dd",
          100: "#f5e7b4",
          200: "#ecd587",
          300: "#dfbe5b",
          400: "#c9a14a",
          500: "#b08537",
          600: "#8c6629",
          700: "#664a1f",
        },
        terracotta: {
          400: "#e07b56",
          500: "#c25b3a",
          600: "#a14528",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
