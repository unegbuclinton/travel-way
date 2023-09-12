/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        primary: '#004999',
        twGray: '#D9D9D9',
        torqorise: 'rgba(28, 109, 208, 0.11)',
        'torqorise-light': 'rgba(28, 109, 208, 0.11)',
      },
    },
  },
  plugins: [],
}
