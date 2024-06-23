/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#109172',
        secondary: '#1AAC87',
      },
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

