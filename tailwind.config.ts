import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: {
          950: "#0A0E27",
          900: "#0F1535",
          800: "#1A2151",
          700: "#1E2A6B",
          ink: "#0B1437",
        },
        brand: {
          blue: "#2563EB",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          magenta: "#D946EF",
          pink: "#EC4899",
        },
        bg: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FB",
        },
        border: "#E5E9F2",
        "text-muted": "#6B7280",
        success: "#10B981",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #2563EB 0%, #22D3EE 35%, #8B5CF6 70%, #EC4899 100%)",
        "gradient-cta": "linear-gradient(90deg, #D946EF 0%, #EC4899 100%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
