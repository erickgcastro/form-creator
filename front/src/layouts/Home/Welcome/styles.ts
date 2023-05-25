import { styled } from 'src/styles/stitches.config';

export const Logo = styled('span', {
  color: '$primary',
  fontSize: '$xSmall',
  fontWeight: 'bold',
  letterSpacing: '0.105em',
  margin: '0 auto 10px',
  width: 'max-content',
  display: 'block',
});

export const Container = styled('section', {
  background: '#fff',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Content = styled('div', {
  width: '500px',
});

export const Title = styled('h1', {
  fontSize: '34px',
  textAlign: 'center',
});

export const BtnAuth = styled('button', {
  background: '$primary',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  letterSpacing: '0.105em',
  margin: '40px auto 0',
  width: 'max-content',
  display: 'block',
});
