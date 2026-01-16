/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f9f9f9',
          dark: '#0a0a0a',
        },
        primary: {
          light: '#1a1a1a',
          dark: '#ffffff',
        },
        secondary: {
          light: '#666666',
          dark: '#888888',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
      },
      maxWidth: {
        content: '700px',
      },
    },
  },
  plugins: [],
}

