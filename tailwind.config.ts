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
        bg: {
          main: "#0F172A",
          card: "#1E293B",
          surface: "#1E293B",
          cardHover: "#1E293B",
        },
        accent: {
          blue: "#3B82F6",
          blueHover: "#60A5FA",
          hover: "#60A5FA",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#94A3B8",
        },
        border: {
          subtle: "#334155",
          card: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
