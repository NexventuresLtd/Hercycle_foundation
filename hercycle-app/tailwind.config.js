/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:         '#e8216b',
          'pink-dark':  '#c9185a',
          purple:       '#7b2fbf',
          'purple-dark':'#6a25a8',
          dark:         '#0f0a1a',
          navy:         '#1a0a2e',
          'light-pink': '#fef2f8',
          'light-purple':'#f5f0ff',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"','Georgia','serif'],
        sans:  ['"Inter"','system-ui','sans-serif'],
      },
      animation: {
        'ticker':      'ticker 28s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'fade-up':     'fadeUp 0.7s ease forwards',
        'pulse-dot':   'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%,100%': { transform: 'scale(1)', opacity:'1' },
          '50%':     { transform: 'scale(1.5)', opacity:'0.5' },
        },
      },
      clipPath: {
        'diagonal-down': 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
        'diagonal-up':   'polygon(0 0, 100% 5%, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
}
