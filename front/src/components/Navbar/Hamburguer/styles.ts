import { styled } from 'src/styles/stitches.config';

export const Container = styled('div', {
  display: 'none',
  cursor: "pointer",

  '@800': {
    display: 'block',
  },
});
