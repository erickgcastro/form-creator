import { styled } from 'src/styles/stitches.config';

export const Area = styled('div', {
  width: 'max-content',
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});

export const Arrow = styled('span', {
  fontSize: '20px',

  variants: {
    rotate: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

export const Button = styled('button', {
  border: '$border',
  background: '$bgWhite',
  width: '32px',
  height: '32px',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const Number = styled('button', Button, {
  fontSize: '$small',
  fontWeight: 'bold',
  height: '37px',
  width: '35px',
});
