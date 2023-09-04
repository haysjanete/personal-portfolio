/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/App.js",
  ],
  theme: {
    extend: {
      height: {
        '40': '40rem',
      },
      colors: {
        'light-purple': '#e8d1f6',
      },
    },
  },
  plugins: [],
}

