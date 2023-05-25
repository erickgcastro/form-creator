import { styled } from 'src/styles/stitches.config';
import { FormCard } from 'src/components/Form';
import Link from 'next/link';

export const Logo = styled('a', Link, {
  position: 'absolute',
  top: '-100px',
  color: '$primary',
  fontSize: '$big',
  fontWeight: 'bold',
  letterSpacing: '0.105em',
  textDecoration: 'none',
});

export const Container = styled('form', FormCard, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '450px',
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@500': {
    width: '100vw',
  },
});

export const Title = styled('h1', {
  fontSize: '$medium',
});

export const Input = styled('input', {
  padding: '5px 7px',
  fontSize: '$small',
  width: '100%',
  border: 'solid 1px $inputBorder',
  borderRadius: '5px',
  background: '$inputBackground',
});

export const Button = styled('button', {
  padding: '6px 15px',
  width: 'max-content',
  border: 'none',
  background: '$primary',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '$xSmall',
});
