/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tmdb: {
          blue: '#01b4e4',
          green: '#90cea1',
          dark: '#0d253f',
        },
      },
    },
  },
  plugins: [],
}