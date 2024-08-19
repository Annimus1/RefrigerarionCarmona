/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : "#1E0342",
        'active': "#0E46A3",
        'light-blue':"#9AC8CD"
      }
    },
  },
  plugins: [],
}
