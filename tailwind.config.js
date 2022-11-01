const TailwindcssFormsPlugins = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'green-c4': 'rgb(153, 212, 97)',
      },
      colors: {
        bdr: '#e8e8e8',
        'bdr-60': '#e8e8e860',
        'prime-g': '#fffe70',
        'prime-w': '#fafafa',
      },
      boxShadow: {
        '1bs': '0 1px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    TailwindcssFormsPlugins,
  ],
};
