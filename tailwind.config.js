/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      blue: "#12b1f9",
      blue5: "#12b1f920",
      gray: "#8492a6",
      yellow: "#ffff0040",
      cyanaqua: "#00dbc6",
      cyanaqua5: "#00dbc620",
      bodybg0: "#00dbc610",
      bodybg1: "#1d2b41",
      bodybg15: "#1d2b4150",
      bodybg2: "#162b46",
      bodybg25: "#162b4650",
      bodybg3: "#0a1e38",
      bodybg35: "#0a1e3890",
      header1: "#22a6ff",
      header2: "#00bcd4",
      header3: "#00dbc6",
      cursor: "#162b4650",
      cblack: "#00000010",
    },
    fontFamily: {
      akatab: ["Akatab", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
    },
    extend: {
      spacing: {
        12: "0.75rem",
        24: "1.50rem",
      },
    },
  },
  plugins: [],
}
