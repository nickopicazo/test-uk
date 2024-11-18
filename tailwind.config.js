/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: "tw-",
  content: [
    "./snippets/*.liquid",
    "./sections/*.liquid",
    "./templates/*.liquid",
    "./layout/*.liquid",
    './src/js/components/*.vue'
  ]
};
