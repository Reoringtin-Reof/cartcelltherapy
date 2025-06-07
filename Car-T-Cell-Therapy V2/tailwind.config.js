/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme': {
          teal: '#2cc9b4',
          'teal-dark': '#1a9c8a',
          'teal-light': '#7ee6d7',
          'teal-100': '#e6f7f5',
          'teal-200': '#b3ebe4',
          'teal-300': '#80dfd3',
          'teal-400': '#4dd3c2',
          'teal-500': '#2cc9b4',
          'teal-600': '#1a9c8a',
          'teal-700': '#147a6d',
          'teal-800': '#0e584f',
          'teal-900': '#073632',
          navy: '#1f2937',
          cream: '#f8f5f2',
          white: '#ffffff',
          'gray-light': '#9CA3AF'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      height: {
        'screen-90': '90vh'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(31, 41, 55, 0.7), rgba(31, 41, 55, 0.4))'
      }
    },
  },
  plugins: [],
};