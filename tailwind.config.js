/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'frank-ruhl': ['"Frank Ruhl Libre"', 'serif']
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(10px)', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'translateX(0)' }
        },
        blurOut: {
          '0%': { opacity: '1', filter: 'blur(0)', transform: 'translateX(0)' },
          '100%': { opacity: '0', filter: 'blur(10px)', transform: 'translateX(40px)' }
        }
      },
      animation: {
        'fade-in-down': 'fadeInDown 1.5s ease-out both',
        'fade-in-up': 'fadeInUp 1.5s ease-out 0.7s both',
        'blur-in': 'blurIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'blur-out': 'blurOut 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      }
    },
  },
  plugins: [],
}