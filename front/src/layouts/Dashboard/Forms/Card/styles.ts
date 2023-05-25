import { styled } from 'src/styles/stitches.config';
import Link from 'next/link';

export const Card = styled('div', {
  background: '$bgWhite',
  border: '$border',
  borderRadius: '5px',
  display: 'grid',
  gridTemplateRows: '60% 25% 15%',
  gridTemplateColumns: '1fr',
  padding: ' 20px 10px 5px',
});

export const TextCard = styled('span', {
  color: '$textColorBlur',
  fontSize: '$small',
  textAlign: 'center',
});

export const InfoArea = styled('div', {
  display: 'flex',
  padding: '0 10px',
  justifyContent: 'space-between',
  borderTop: '$border',
  borderBottom: '$border',
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TextBlur = styled('div', {
  fontSize: '$xSmall',
  color: '$textColorGrey',
});

export const LinkToForm = styled('a', Link, {
  margin: '0 auto',
  padding: '6px',
  // background: '$primary',
  // color: '$bgWhite',
  color: '$primary',
  fontWeight: 'bold',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const ThreeDots = styled('button', {
  background: 'none',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  position: 'absolute',
  right: 0,
  color: '$textColorGrey',

  '&:hover': {
    background: '$background',
  },
});
