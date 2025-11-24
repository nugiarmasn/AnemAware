/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#150B0B',
        accent: '#FF1493',
        'accent-light': '#FF69B4',
        danger: '#EA2831',
        dark: '#1a1a1a',
        'dark-light': '#2a2a2a',
      },
    },
  },
  plugins: [],
}