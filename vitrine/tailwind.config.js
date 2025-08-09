/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}',
    '../../libs/**/{src,pages,components,public,app}/**/*.{astro,html,js,cjs,mjs,jsx,md,svelte,ts,tsx,vue}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'contact-pattern': "url('/contact-page/contact_visuel.jpg')",
      },
      fontFamily: {
        heading: ['"PT Serif"', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
