import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8edf4",
          100: "#c5d1e3",
          200: "#9fb3d0",
          300: "#7895bd",
          400: "#5b7eae",
          500: "#3e679f",
          600: "#365a8d",
          700: "#2c4a75",
          800: "#233b5e",
          900: "#1e3a5f",
          950: "#0f1d30",
        },
        secondary: {
          50: "#e0faf4",
          100: "#b3f2e1",
          200: "#80eacc",
          300: "#4de2b7",
          400: "#26dba6",
          500: "#00d4aa",
          600: "#00bf96",
          700: "#00a67e",
          800: "#008d67",
          900: "#006449",
          950: "#003325",
        },
        accent: {
          50: "#fff3ed",
          100: "#ffe2d0",
          200: "#ffc4a1",
          300: "#ffa06b",
          400: "#ff8550",
          500: "#ff6b35",
          600: "#e55a28",
          700: "#c44a1f",
          800: "#a03b18",
          900: "#7a2e13",
          950: "#3d170a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "var(--font-plus-jakarta-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      screens: {
        xs: "475px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 170, 0.4), 0 0 20px rgba(0, 212, 170, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(0, 212, 170, 0.6), 0 0 40px rgba(0, 212, 170, 0.2)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
        "slide-left": "slide-left 0.5s ease-out forwards",
        "slide-right": "slide-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
