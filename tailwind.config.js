/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#14161A",
          muted: "#5B5F6B",
          faint: "#8A8E99",
        },
        primary: {
          50: "#EEF0FF",
          100: "#E0E3FF",
          400: "#7C74F1",
          500: "#4F46E5",
          600: "#4038C7",
          700: "#332DA0",
        },
        accent: {
          50: "#FFF7EA",
          100: "#FFEBC7",
          400: "#F7B84B",
          500: "#F5A623",
          600: "#D98C10",
        },
        growth: {
          50: "#ECFDF5",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        line: "#E7E5DE",
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Inter\"", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "monospace"],
      },
      maxWidth: {
        "content": "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
