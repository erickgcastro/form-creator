import { styled } from 'src/styles/stitches.config';

export const WindowBlur = styled('div', {
  padding: '20px',
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 999,
  width: '100vw',
  height: '100vh',
  background: 'rgb(0,0,0, 25%)',
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'auto',

  variants: {
    center: {
      true: {
        alignItems: 'center',
      },
    },
  },

  '@650': {
    padding: '20px 3px ',
  },
});
