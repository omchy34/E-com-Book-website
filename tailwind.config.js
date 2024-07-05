/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        clifford: "#da373d",
        pink: {
          100: '#ffebef',
          500: '#ff69b4',
          600: '#ff1493',
          700: '#e0115f',
        },
      },
    }
  },
  plugins: [],
}