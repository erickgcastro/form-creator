import { styled } from 'src/styles/stitches.config';

export const ShareContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',

  '@400': {
    overflowX: 'scroll',
    justifyContent: 'flex-start',
  },
});

export const LinkBox = styled('div', {
  position: 'relative',
  margin: '30px auto 0',
  minWidth: '500px',
  width: '500px',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '$border',
  backgroundColor: 'transparent',
  borderRadius: '2px',

  '@650': {
    minWidth: 'unset',
    width: '100%',
    border: 'none',
    justifyContent: 'center',
    '.link': {
      display: 'none',
    },
  },
});

export const BtnCopyLink = styled('button', {
  position: 'relative',
  height: '100%',
  width: '100px',
  border: 'none',
  background: '$inputBackground',
  fontSize: '16px',
  color: '$primary',
  cursor: 'pointer',
});

export const CopyMessage = styled('div', {
  position: 'absolute',
  right: '0',
  top: '-30px',
  fontSize: '15px',
  borderRadius: '5px',
  color: '#fff',
  padding: '5px',
  background: '#5e5e5e',

  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-10px',
    margin: '0 auto',
    width: 0,
    height: 0,
    transform: 'rotate(180deg)',
    borderBottom: '10px solid #5e5e5e',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
  },
});

export const BtnClose = styled('button', {
  position: 'absolute',
  right: '20px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  // color: '#cb3939',
  color: '$textColorGrey',
  height: 'max-content',
  zIndex: '100',

  '@500': {
    top: '-22px',
    right: '10px',
    padding: '0 5px',
    background: '$bgWhite',
    borderRadius: '5px',
  },
});
