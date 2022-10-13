/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
      'skills': '420px',
      'projects': '520px',
      'edu': '650px',
    },

    extend: {
      colors:{
        primary: '#FFFFFF',
        secondary: '#F4F4F4',
      },
      fontFamily:{
        'redhat': ['Red Hat Display'],
      },
    },
  },
  plugins: [],
}
