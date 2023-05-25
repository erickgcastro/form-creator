import { styled } from 'src/styles/stitches.config';

export const OptionsArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  padding: '0 10px',

  div: {
    width: 'max-content',
    fontSize: '$small',
    position: 'relative',

    span: {
      marginLeft: '27px',
    },
  },

  // 'input[type="radio"]': {
  //   // display: 'none',
  // },
});


