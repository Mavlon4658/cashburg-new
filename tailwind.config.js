/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(133.17deg, rgb(33, 33, 35) 0%, rgb(18, 19, 22) 108.201%)',
      },
    },
  },
  plugins: [],
}

