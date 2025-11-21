module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          50: "rgba(255,255,255,0.05)",
          100: "rgba(255,255,255,0.1)",
          200: "rgba(255,255,255,0.2)",
          300: "rgba(255,255,255,0.3)"
        }
      },
      fontFamily: {
        great: ["'Great Vibes'", "cursive"],
        dancing: ["'Dancing Script'", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(147,51,234,0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(147,51,234,0.8)" }
        }
      }
    }
  },
  plugins: []
};