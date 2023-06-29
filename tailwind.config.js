/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    colors: {
      'blue': '#12b1f9',
      'gray': '#8492a6',
      'cyanaqua': '#00dbc6',
      'bodybg1': '#1d2b41',
      'bodybg2': '#162b46',
      'bodybg3': '#0a1e38',
      'header1': '#22a6ff',
      'header2': '#00bcd4',
      'header3': '#189993',
      'header4': '#00dbc6'
    },
    fontFamily: {
      caveat: ['Caveat', 'sans-serif'],
      sans: ['Graphik', 'sans-serif']
    },
    extend: {
      spacing: {
        '12': '0.75rem',
        '24': '1.50rem',
      }
    }
  },
  plugins: [],
}

