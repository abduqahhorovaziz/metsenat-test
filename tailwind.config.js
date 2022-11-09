/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik: ['Rubik', 'sans-serif'],
        display: ['SF Pro Display', 'sans-serif']
      },
      colors: {
        white: '#FFFFFF',
        dark: '#28293D',
        grayy: {
          100: '#F1F1F3',
          200: '#F5F5F7',
          300: '#E8E8E8',
        },
        primary: '#3366FF',
        bluee: {
          100: '#E0E7FF',
          200: '#EDF1FD',
          300: 'rgba(51, 102, 255, 0.6)',
          400: '#3365FC',
        }, 
        status: {
          blue: '#5BABF2',
          orange: '#FFA445',
          yellow: '#00CF83',
          gray: '#979797',
        }
      }
    },
    letterSpacing: {
      nav: '1.125px'
    },
  },
  plugins: [],
}
