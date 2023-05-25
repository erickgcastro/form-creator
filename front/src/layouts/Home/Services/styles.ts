import { styled } from 'src/styles/stitches.config';

export const Container = styled('section', {
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
  padding: '20px ',
  overflow: 'hidden',
});

export const CardsArea = styled('div', {
  display: 'flex',
  gap: '93px',

  '@920': {
    overflowX: 'scroll',
    maxWidth: '100vw',
    gap: '50px',
    padding: '0 30px'
  },
});
