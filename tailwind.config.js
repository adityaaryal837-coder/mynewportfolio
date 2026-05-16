/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        editor: {
          bg: "#0d1117",
          sidebar: "#010409",
          activity: "#0d1117",
          tabs: "#161b22",
          activeTab: "#0d1117",
          border: "#30363d",
          text: "#8b949e",
          activeText: "#c9d1d9",
        },
        primary: {
          DEFAULT: "#7000ff",
          dark: "#4a00aa",
          light: "#a855f7",
        },
        secondary: "#00d2ff",
        accent: "#ff0080",
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.1)",
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(112, 0, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(112, 0, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}
