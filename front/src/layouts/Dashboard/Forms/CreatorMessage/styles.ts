import Link from 'next/link';
import { styled } from 'src/styles/stitches.config';

export const Title = styled('span', {
  fontSize: '$big',
  display: 'block',
  margin: '0 auto 20px',
  width: 'max-content',
});

export const Button = styled('a', Link, {
  width: 'max-content',
  borderRadius: '5px',
  padding: '7px 10px',
  background: '$primary',
  textDecoration: 'none',
  color: '$bgWhite',
  display: 'block',
  margin: '0 auto',

  '&:hover': {
    background: '$primaryDark',
  },
});
