/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      "test" : '1203px',
      "my_719" : "719px"
    },
    width: {
      "my_719" : "719px"
    },
    colors: {
      "bg_color": '#60696C'
    },
    rotate: {
      "my_135" : '135deg',
      "my_45" : '45deg'
    },
    margin: {
      "my_55" : "55px"
    }
  },
  plugins: [],
}