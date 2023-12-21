module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      // colors: {
      //   'light': {
      //     'primary': '#f3f4f6',
      //     'secondary': '#1f2937',
      //     // add more colors as needed
      //   },
      //   'dark': {
      //     'primary': '#1f2937',
      //     'secondary': '#f3f4f6',
      //     // add more colors as needed
      //   },
      // },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
