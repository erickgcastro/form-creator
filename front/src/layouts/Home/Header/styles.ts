import { styled } from 'src/styles/stitches.config';

export const Logo = styled('span', {
  color: '$primary',
  fontSize: '$big',
  fontWeight: 'bold',
  letterSpacing: '0.105em',
});

export const Container = styled('div', {
  background: '#fff',
  height: '60px',
});

export const ContentArea = styled('div', {
  margin: '0 auto',
  maxWidth: '1100px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 10px',
});

export const Nav = styled('nav', {
  display: 'flex',
  gap: '60px',
});

export const UlNav = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  gap: '30px',

  li: {
    a: {
      color: '$textColor',
      fontWeight: 'bold',
      fontSize: '$xSmall',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  'li a:hover': {
    textDecoration: 'underline',
  },

  '@600': {
    display: 'none',
  },
});

export const BtnAuth = styled('button', {
  background: '#FFFFFF',
  padding: '7px 10px',
  border: '1px solid  $primary',
  borderRadius: '5px',
  color: '$primary',
  fontWeight: 'bold',
  fontSize: '14px',
  cursor: 'pointer',
});
