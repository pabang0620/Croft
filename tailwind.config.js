/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        accent: '#124946',
        base100: '#FFFFFF',
        base200: '#F1F1F1',
        base400: '#AEAEAE',
        base600: '#2f2f2f',
        base500: '#767676',
        yellow: '#F2F600',
        error: '#FF0000',
        info: '#000000',
        primary: '#3F9192',
        success: '#2AAC73',
        Secondary: '#F3ECDF',
        'lightest-gray': '#F1F1F1',
        'custom-color': '#F3ECDF',
        'primary-accent': '#87DFCA',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
    },
  },
  // 스크롤바 숨기기를 위함 사용 시 => scrollbar-hide 속성 추가
  plugins: [require('tailwind-scrollbar-hide')],
};
