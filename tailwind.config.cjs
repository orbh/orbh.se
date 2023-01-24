/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'serif'],
    }
  },
  plugins: [],
}
