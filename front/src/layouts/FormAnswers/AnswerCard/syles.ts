import { styled } from 'src/styles/stitches.config';

export const InfoArea = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const UserImage = styled('div', {
  position: 'relative',
  width: '60px',
  height: '60px',
  borderRadius: '5px',
  overflow: 'hidden',
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'max-content',
  gap: '10px',

  variants: {
    align: {
      end: {
        alignItems: 'flex-end',
        '@500': {
          display: 'none',
        },
      },
    },
  },
});

export const Text = styled('span', {
  fontSize: '$xSmall',
  color: '$textColorBlur',
  fontWeight: 'bold',

  variants: {
    primary: {
      true: {
        color: '$textColor',
        fontSize: '$medium',
      },
    },
  },
});

export const Button = styled('button', {
  display: 'block',
  margin: '20px auto 0',
  border: 'none',
  background: 'none',
  color: '$primary',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '$xSmall',

  '&:hover': {
    textDecoration: 'underline',
  },
});
