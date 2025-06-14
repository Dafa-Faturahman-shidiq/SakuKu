// tailwind.config.js
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
  content: [
    './src/**/*.{html,js}', // atau sesuaikan dengan lokasi file HTML kamu
    './dist/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['material-symbols']),
    }),
  ],
};
