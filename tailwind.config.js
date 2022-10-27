const TailwindcssFormsPlugins = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'prime-g': '#a7ff40',
        'prime-w': '#f5f6fa',
      },
    },
  },
  plugins: [
    TailwindcssFormsPlugins,
  ],
};
