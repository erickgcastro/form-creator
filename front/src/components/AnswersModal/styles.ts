import { styled } from 'src/styles/stitches.config';
import ButtonSubmit from 'src/components/ButtonSubmit';

export const ContentArea = styled('div', {
  boxSizing: 'content-box',
  position: 'relative',
  width: 'max-content',
  height: 'max-content',
  padding: '20px 10px',
  background: '$background',
  borderRadius: '5px',

  '@720': {
    width: '100vw',
  },
});

export const CloseBtn = styled('button', {
  position: 'absolute',
  top: '15px',
  right: '20px',
  border: 'none',
  background: 'none',
  fontSize: '$small',
  fontWeight: 'bold',
  color: '$textColorBlur',
  cursor: 'pointer',
  padding: '3px',
});

export const Title = styled('span', {
  fontSize: '$medium',
  fontWeight: 'bold',
  width: 'max-content',
  display: 'block',
  margin: '0 auto 20px',
});

export const Submit = styled('button', ButtonSubmit, {
  padding: '7px',
  marginTop: '20px',
});
