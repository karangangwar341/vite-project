/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'deep-purple': 'linear-gradient(to bottom right, #0d0130, #1d0226)',

        'blue-midnight': 'linear-gradient(to right, #667eea, #764ba2)',
        'red-maroon': 'linear-gradient(to right, #f56565, #c53030)',
        'green-emerald': 'linear-gradient(to right, #48bb78, #38a169)',
        'pink-plum': 'linear-gradient(to right, #ed64a6, #d64161)',
        'teal-navy': 'linear-gradient(to right, #319795, #2C5282)',
      },
    },
  },
  plugins: [],
}