/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      lightGrayishBlue: '#F7F9FC',
      softBlue: '#4A90E2',
    },
    extend: {
      spacing: {
        128: "2em",
      },
    },
  },
  plugins: [],
};
