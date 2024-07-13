/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        5: '5px',
        10: '10px',
        30: '30px',
        40: "40px",
        50: "50px",
        100: "100px",
        120: "500px",
        150: '150px',
        200: '200px',
      }
    },
  },
  plugins: [],
}

