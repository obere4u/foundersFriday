import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideDown: {
          "0%": { marginTop: "0rem" },
          "100%": { marginTop: "1.25rem" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-in",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      boxShadow: {
        elevated: "0 8px 16px rgba(0, 0, 0, 0.15)",
        intense: "0 12px 24px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
