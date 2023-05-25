import { styled } from 'src/styles/stitches.config';
import Link from 'next/link';

export const Container = styled('div', {
  overflow: "hidden",
  position: 'fixed',
  height: '100vh',
  width: '50%',
  paddingBottom: '20px',
  background: '$bgWhite',
  borderLeft: '$border',
  boxShadow: '1px 0 10px #00000025',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 999,


  '@600': {
    width: '80%',
  }
});

export const UserArea = styled('div', {
  width: '100%',
  padding: '10px',
  display: 'flex',
  gap: '10px',
  borderBottom: '$border',
});

export const Image = styled('div', {
  minWidth: '50px',
  width: '50px',
  height: '50px',
  position: 'relative',
  borderRadius: '5px',
  overflow: 'hidden',
});

export const Text = styled('span', {
  display: 'block',
  fontSize: '$small',
  fontWeight: 'bold',

  '@500': {
    overflow: "hidden",
    lineBreak: "unset",
    maxWidth: "95%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }
});

export const BtnLink = styled('a', Link, {
  padding: '10px',
  fontSize: '$small',
  borderBottom: '$border',
  textDecoration: 'none',
  color: '$textColor',

  '&:hover': {
    background: '#f1f1f1',
    color: '$primary',
  },

  variants: {
    checked: {
      true: {
        background: '#f1f1f1',
        color: '$primary',
      },
    },
  },
});

export const ExitBtn = styled('button', {
  margin: 'auto auto 0',
  maxWidth: 'max-content',
  padding: '4px 20px',
  borderRadius: '5px',
  color: 'red',
  fontWeight: 'bold',
  border: 'none',
  background: 'none',
  fontSize: '$xSmall',
});
