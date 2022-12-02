/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "Bitter": "Bitter",
      "MaterialSymbols": "MaterialSymbolsOutlined",
    },
    extend: {
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.4)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "blink": {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 1 ease-in-out 500ms",
        "blink": "blink infinite 1s steps(1)",
      },
    },
  },
  plugins: [],
}
