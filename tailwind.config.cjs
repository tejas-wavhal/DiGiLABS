/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        maincolor: {
          100: "#0858F7",
          200: "#0048d7"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
