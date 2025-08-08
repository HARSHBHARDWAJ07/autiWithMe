/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        success: '#10B981',
        body: '#000',
        bodylight: '#fff'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
