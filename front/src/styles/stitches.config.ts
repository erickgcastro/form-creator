import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      primary: '#632ff5',
      primaryDark: '#3308aa',
      textColor: '#000',
      textColorBlur: '#404040',
      textColorGrey: '#7C7C7C',
      bgWhite: '#F9F9F9',
      border: 'solid 1px #ededed',
      background: '#F5F5F5',
      // background: '#f0f0f0',
      inputBackground: '#f4f2f2',
      inputBorder: '#d8d8d8',
    },
    fontSizes: {
      big: '24px',
      medium: '22px',
      small: '18px',
      xSmall: '16px',
    },
    shadows: {
      modal:
        'rgb(255 255 255 / 90%) 0px 1px 0px inset, rgb(0 0 0 / 3%) 0px -1px 0px inset, rgb(0 0 0 / 20%) 0px 1px 3px;',
    },
  },
  media: {
    320: '(max-width: 320px)',
    400: '(max-width: 400px)',
    500: '(max-width: 500px)',
    600: '(max-width: 600px)',
    650: '(max-width: 650px)',
    720: '(max-width: 720px)',
    800: '(max-width: 800px)',
    920: '(max-width: 920px)',
    1000: '(max-width: 1000px)',
    1280: '(min-width: 1280px)',
  },
});

export const GlobalStyles = globalCss({
  '@import': [
    'url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap")',
  ],

  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Inter',
    boxSizing: 'border-box',
    outlineColor: 'grey',
    scrollBehavior: 'smooth',
  },

  'html, body': {
    background: '$background',
  },
});
