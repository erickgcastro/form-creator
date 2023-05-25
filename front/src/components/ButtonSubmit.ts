import { styled } from 'src/styles/stitches.config';

const Button = styled('button', {
  display: 'block',
  margin: '20px auto',
  padding: '8px 10px',
  height: 'max-content',
  width: '12.5rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '5px',
  color: '#fff',
  letterSpacing: '0.105em',
  background: '$primary',
  border: 'solid 1px $primary',

  '&:hover': {
    background: '$primaryDark',
  },

  variants: {
    disabled: {
      true: {
        background: '#4e4e4e',
        borderColor: 'transparent',
        cursor: 'not-allowed',
        '&:hover': {
          background: '#4e4e4e',
        },
      },
    },
  },
});
export default Button;
