/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#2D2E32',
        primary: '#F9F9F9',
        secondary: '#767676',
      },
      backgroundImage: {
        'user-img': "url('/src/assets/DSC00853.jpg')",
      },
    },
  },
  plugins: [],
};
