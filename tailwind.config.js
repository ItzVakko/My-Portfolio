/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      colors: {
        customGray: "rgba(21, 21, 21, 0.7)",
        customWhite: "rgba(255, 255, 255, 0.2)",
        lightGray: "#4A4A4A",
        cssOrange: "#FFD54F",
        cssPurple: "#A57BC4",
        cssRed: "#FA8072",
      },
    },
  },
  plugins: [],
};
