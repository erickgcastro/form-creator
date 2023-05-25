import { styled } from 'src/styles/stitches.config';

export const Container = styled('section', {
  background: '#fff',
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '70px',
});

export const Image = styled('div', {
  position: 'relative',
  padding: '10px',
  width: '420px',
  height: '430px',
  background: '$background',
  borderRadius: '5px',
  overflow: 'hidden',

  '@1000': {
    display: 'none',
  },
});

export const TextArea = styled('div', {
  textAlign: 'center',
  maxWidth: '500px',
});

export const Desc = styled('p', {
  fontSize: '$small',
});

export const BtnAuth = styled('button', {
  background: '$primary',
  padding: '7px 10px',
  border: 'none',
  borderRadius: '5px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '14px',
  cursor: 'pointer',
  letterSpacing: '0.105em',
  margin: '40px auto 0',
  width: 'max-content',
  display: 'block',
});
