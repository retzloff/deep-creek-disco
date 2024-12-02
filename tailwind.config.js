import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1628',
          800: '#142236',
          700: '#1E2E44',
        },
        bear: {
          'dark-brown': '#613704',
          'orange-brown': '#d46300',
          gold: '#fddc62',
          cream: '#fde5b7',
          white: '#ffffff',
          gray: '#545454',
          black: '#000000',
        },
      },
      backgroundImage: {
        'bear-gradient':
          'linear-gradient(to right, #613704, #d46300, #fddc62, #fde5b7, #fff, #545454, #000)',
      },
    },
  },

  plugins: [typography, forms, containerQueries],
};
