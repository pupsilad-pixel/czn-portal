/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./widgets/**/*.{js,vue,ts}",
    "./entities/**/*.{js,vue,ts}",
    "./shared/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0050AA',
        'brand-blue-dark': '#003D82',
        'brand-orange': '#E65028',
        'brand-orange-dark': '#C43D1A',
        'brand-sky': '#5AB4E6',
        'brand-sky-dark': '#3A9DD4',
        'brand-navy': '#0A1628',
        'brand-navy-dark': '#162340',
        'bg-light': '#F4F7FB',
        'bg-blue': '#E8EFF8',
      },
    },
  },
  plugins: [],
}
