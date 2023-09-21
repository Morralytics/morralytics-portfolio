/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont'],
      },
      colors: {
        'persion-orange': '#BE8A60',
        'liver': '#5C4742',
      },
    },
  },
  plugins: [],
}
