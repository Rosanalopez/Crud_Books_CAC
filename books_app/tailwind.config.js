/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      "light_black": "#1c1c1e",
      "white": "#f3f3f3",
      "black": "#19191b",
      "blue": "#5179ff",
      "para_text": "#565657"
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

