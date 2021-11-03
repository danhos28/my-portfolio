const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      body: ['"Josefin Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#3E00FF',
        secondary: '#AE00FB',
        ternary: '#B5FFD9',
        dark: '#170055',
        darkTwo: '#260287',
        white: '#FFFFFF',
        light: '#FCFBFF',
        transparent: 'transparent',
        current: 'currentColor',
        indigo: colors.indigo,
      },
      backgroundImage: {
        'waves-one-light': "url('/images/bg-one-light.svg')",
        'waves-one-dark': "url('/images/bg-one-dark.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
