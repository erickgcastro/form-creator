import { styled } from 'src/styles/stitches.config';

export const Button = styled('button', {
  padding: '5px 7px',
  fontSize: '$xSmall',
  border: '$border',
  cursor: 'pointer',
  background: '$bgWhite',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  '&:hover': {
    borderColor: 'black',
  },
});
