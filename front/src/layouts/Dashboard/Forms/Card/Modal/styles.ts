import { styled } from 'src/styles/stitches.config';
import Link from 'next/link';

export const Modal = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: '10px',
  minWidth: '200px',
  background: '$bgWhite',
  boxShadow: '$modal',
  borderRadius: '5px',
});

export const ModalOption = styled('button', {
  padding: '10px 15px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  color: '$textColor',

  '&:hover': {
    background: '#efefef',
  },

  variants: {
    dark: {
      true: {
        borderRadius: '5px 5px 0 0',
        background: '#303030',
        '&:hover': {
          background: '#303030',
        },
      },
    },
  },
});

export const LinkOption = styled('a', Link, ModalOption, {
  textDecoration: 'none',
});

export const Text = styled('span', {
  fontSize: '14px',
  fontWeight: 'bold',
  letterSpacing: '1px',
});

export const Icon = styled('span', {
  fontSize: '21px',
});
