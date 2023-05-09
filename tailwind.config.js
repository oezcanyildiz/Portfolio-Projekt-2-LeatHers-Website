/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#5C504E',
        'main-color2': '#3b3b3b',
        'main-color3': '#F4AC82',
        'main-color4':'#3F5E5A',
        'back-color1':'#CBFF8C',
        'back-color2':'#E3E36A',

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

