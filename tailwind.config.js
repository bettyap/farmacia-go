/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fountain-blue': {
          '50': '#effcfc',
          '100': '#d7f6f6',
          '200': '#b4eced',
          '300': '#81dcdf',
          '400': '#46c3ca',
          '500': '#2eb5be',
          '600': '#268894',
          '700': '#256e79',
          '800': '#265a64',
          '900': '#244c55',
          '950': '#133139',
        },
      }
    },
  },
  plugins: [],
}

