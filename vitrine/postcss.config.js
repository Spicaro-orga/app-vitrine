/** @type {import('postcss-load-config').Config} */

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {
      config: './tailwind.config.js',
    },
    autoprefixer: {},
  },
}
