/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'off-white': '#F4F4F5',
      gray: {
        50: '#F7FBFC',
        100: '#EBF2F5',
        200: '#DDEAF0',
        300: '#ABBBC2',
        400: '#879499',
        500: '#697980',
        600: '#4B5E66',
        700: '#2F4047',
        800: '#222E33',
        900: '#11171A',
      },
      blue: {
        50: '#F1F8FF',
        100: '#DBEDFF',
        200: '#C8E1FF',
        300: '#79B8FF',
        400: '#2188FF',
        500: '#0366D6',
        600: '#005CC5',
        700: '#044289',
        800: '#032F62',
        900: '#05264C',
      },
      purple: {
        50: '#F5F0FF',
        100: '#E6DCFD',
        200: '#D1BCF9',
        300: '#B392F0',
        400: '#8A63D2',
        500: '#6F42C1',
        600: '#5A32A3',
        700: '#4C2888',
        800: '#3A1D6E',
        900: '#29134E',
      },
      pink: {
        50: '#FFEEF8',
        100: '#FEDBF0',
        200: '#F9B3DD',
        300: '#F692CE',
        400: '#EC6CB9',
        500: '#EA4AAA',
        600: '#D03592',
        700: '#B93A86',
        800: '#99306F',
        900: '#6D224F',
      },
      red: {
        50: '#FFE4E4',
        100: '#FFC6C6',
        200: '#F5A8A8',
        300: '#FF8080',
        400: '#F26060',
        500: '#E23A3A',
        600: '#C82121',
        700: '#9D2323',
        800: '#710000',
        900: '#3F0000',
      },
      orange: {
        50: '#FFF4E0',
        100: '#FAEACD',
        200: '#EED6AC',
        300: '#E8C78B',
        400: '#FFAD31',
        500: '#E58A00',
        600: '#CB6100',
        700: '#AC5300',
        800: '#7B3B01',
        900: '#3D1D00',
      },
      yellow: {
        50: '#FFFBDD',
        100: '#FFF5B1',
        200: '#FFEA7F',
        300: '#FFDF5D',
        400: '#FFD33D',
        500: '#F9C513',
        600: '#DBAB09',
        700: '#B08800',
        800: '#735C0F',
        900: '#403308',
      },
      green: {
        50: '#F0FFF4',
        100: '#DCFFE4',
        200: '#BEF5CB',
        300: '#85E89D',
        400: '#34D058',
        500: '#28A745',
        600: '#22863A',
        700: '#176F2C',
        800: '#165C26',
        900: '#144620',
      },
      teal: {
        50: '#F3FFFF',
        100: '#E9FBF5',
        200: '#BEECDC',
        300: '#9AE1C9',
        400: '#69CAAA',
        500: '#21C08B',
        600: '#009987',
        700: '#008272',
        800: '#005349',
        900: '#1C332B',
      },
      white: '#FFFFFF',
      black: '#111111',
      'divide-color': '#EBF0F6',
      'dark-divide-color': '#1F2339',
      'dark-background': '#111111',
      'dark-gray': {
        900: '#F7FBFC',
        800: '#EBF2F5',
        700: '#DDEAF0',
        600: '#ABBBC2',
        500: '#879499',
        400: '#697980',
        300: '#4B5E66',
        200: '#2F4047',
        100: '#222E33',
        50: '#11171A',
      },
      'dark-blue': {
        900: '#F1F8FF',
        800: '#DBEDFF',
        700: '#C8E1FF',
        600: '#79B8FF',
        500: '#2188FF',
        400: '#0366D6',
        300: '#005CC5',
        200: '#044289',
        100: '#032F62',
        50: '#05264C',
      },
      'dark-purple': {
        900: '#F5F0FF',
        800: '#E6DCFD',
        700: '#D1BCF9',
        600: '#B392F0',
        500: '#8A63D2',
        400: '#6F42C1',
        300: '#5A32A3',
        200: '#4C2888',
        100: '#3A1D6E',
        50: '#29134E',
      },
      'dark-pink': {
        900: '#FFEEF8',
        800: '#FEDBF0',
        700: '#F9B3DD',
        600: '#F692CE',
        500: '#EC6CB9',
        400: '#EA4AAA',
        300: '#D03592',
        200: '#B93A86',
        100: '#99306F',
        50: '#6D224F',
      },
      'dark-red': {
        900: '#FFE4E4',
        800: '#FFC6C6',
        700: '#F5A8A8',
        600: '#FF8080',
        500: '#F26060',
        400: '#E23A3A',
        300: '#C82121',
        200: '#9D2323',
        100: '#710000',
        50: '#3F0000',
      },
      'dark-orange': {
        900: '#FFF4E0',
        800: '#FAEACD',
        700: '#EED6AC',
        600: '#E8C78B',
        500: '#FFAD31',
        400: '#E58A00',
        300: '#CB6100',
        200: '#AC5300',
        100: '#7B3B01',
        50: '#3D1D00',
      },
      'dark-yellow': {
        900: '#FFFBDD',
        800: '#FFF5B1',
        700: '#FFEA7F',
        600: '#FFDF5D',
        500: '#FFD33D',
        400: '#F9C513',
        300: '#DBAB09',
        200: '#B08800',
        100: '#735C0F',
        50: '#403308',
      },
      'dark-green': {
        900: '#F0FFF4',
        800: '#DCFFE4',
        700: '#BEF5CB',
        600: '#85E89D',
        500: '#34D058',
        400: '#28A745',
        300: '#22863A',
        200: '#176F2C',
        100: '#165C26',
        50: '#144620',
      },
      'dark-teal': {
        900: '#F3FFFF',
        800: '#E9FBF5',
        700: '#BEECDC',
        600: '#9AE1C9',
        500: '#69CAAA',
        400: '#21C08B',
        300: '#009987',
        200: '#008272',
        100: '#005349',
        50: '#1C332B',
      },
    },
    fontFamily: {
      sans: ['var(--font-nunito-sans)', 'sans-serif'],
      oswald: ['var(--font-oswald)'],
    },
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: require('./typography'),
    extend: {
      colors: {
        'off-white': '#f5ebe0',
        accent: 'var(--color-accent)',
        'accent-lighter': 'var(--color-accent-lighter)',
        fore: {
          primary: 'var(--color-fore-primary)',
          secondary: 'var(--color-fore-secondary)',
          subtle: 'var(--color-fore-subtle)',
        },
        card: {
          background: 'var(--color-card-background)',
        },
        back: {
          primary: 'var(--color-back-primary)',
          secondary: 'var(--color-back-secondary)',
          subtle: 'var(--color-back-subtle)',
          accent: 'var(--color-back-accent)',
        },
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      gap: {
        15: '60px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
