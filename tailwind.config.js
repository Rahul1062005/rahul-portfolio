/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(34, 211, 238, 0.2)',
        glow: '0 8px 30px rgba(15, 23, 42, 0.6)',
      },
    },
  },
  plugins: [],
}

