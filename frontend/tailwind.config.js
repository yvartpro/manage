/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "13": "13px",
        "15": "15px",
      },
    },
  },
  plugins: [],
}

