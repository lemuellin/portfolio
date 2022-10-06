/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
