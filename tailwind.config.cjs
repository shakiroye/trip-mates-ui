/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#041536",
        second: "#83878A",
        third: "#1862F5",
      },
      fontFamily: {
        body: ["Space Mono", "monospace"],
        headline: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
