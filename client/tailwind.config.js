/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black-dark': '#181818',
        'custom-black': '#212121',
        'custom-black-light' : '#292929',
        'custom-gray': '#C8C8C8'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}