import { styled } from 'src/styles/stitches.config';

export const AuthArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',

  variants: {
    hidden: {
      true: {
        '@800': {
          display: 'none',
        },
      },
    },
  },
});

export const LoginButton = styled('button', {
  padding: ' 5px 8px',
  border: 'none',
  borderRadius: '5px',
  background: 'transparent',
  fontSize: '$xSmall',
  cursor: 'pointer',

  variants: {
    focus: {
      true: {
        border: 'solid 1px $primary',
        color: '$primary',
      },
    },
  },
});
