import { styled } from 'src/styles/stitches.config';
import Link from 'next/link';

export const Container = styled('div', {
  background: '$bgWhite',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  borderBottom: '$border',
  alignItems: 'center',

  ".main": {
    height: '100%',
    padding: '0 15px',
    position: "relative",
    marginInline: 'auto',
    width: "100%",
    maxWidth: "72rem",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export const Logo = styled('span', {
  color: '$primary',
  fontSize: '$big',
  fontWeight: 'bold',
  letterSpacing: '0.105em',
});

export const Buttons = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '30px',

  '@800': {
    display: 'none',
  },
});

export const StyledLink = styled('a', Link, {
  padding: '0 0 7px',
  fontSize: '$small',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '$textColor',
  transition: 'border-color .1s linear',
  borderBottom: 'solid 2px transparent',

  '&:hover': {
    borderColor: '#dfdfdf',
  },

  variants: {
    checked: {
      true: {
        borderColor: '$primary',
        '&:hover': {
          borderColor: '$primary',
        },
      },
    },
  },
});

export const UserArea = styled('button', {
  minWidth: '170px',
  maxWidth: '190px',
  height: '34px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1px',
  gap: '10px',
  border: '$border',
  borderRadius: '50px',
  background: '$inputBackground',
  cursor: 'pointer',

  '&:hover': {
    color: '$primary',
    borderColor: '$primary',
  },

  '@800': {
    display: 'none',
  },
});

export const UserTextInfo = styled('div', {
  color: '$textColor',
  fontWeight: 'bold',
  fontSize: '$small',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '5px',

  'span.id': {
    color: '#7C7C7C',
    fontSize: '$xSmall',
    fontStyle: 'italic',
  },
});

export const UserImage = styled('div', {
  width: '30px',
  height: '30px',
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const UserName = styled('span', {
  color: '$textColor',
  fontSize: '14px',
  fontWeight: 'bold',
});
