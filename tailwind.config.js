/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F5F0E8',
          100: '#E6DED0',
          200: '#D8C9B1',
          300: '#C9B393',
          400: '#B99D74',
          500: '#A48655',
          600: '#8C7046',
          700: '#735A38',
          800: '#5A4529',
          900: '#422F1B',
        },
        cream: {
          50: '#FFFBF5',
          100: '#FFF7EB',
          200: '#FFF0D7',
          300: '#FFE8C2',
          400: '#FFE0AE',
          500: '#FFD899',
          600: '#FFCF85',
          700: '#FFC770',
          800: '#FFBE5C',
          900: '#FFB647',
        },
        mocha: {
          50: '#F8F5F3',
          100: '#F0EBE7',
          200: '#E2D7CF',
          300: '#D3C2B7',
          400: '#C5AE9F',
          500: '#B69A87',
          600: '#A7856F',
          700: '#937059',
          800: '#775A48',
          900: '#5B4437',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}