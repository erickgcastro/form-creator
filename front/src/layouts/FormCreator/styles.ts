import Link from 'next/link';
import { styled } from 'src/styles/stitches.config';

export const InputText = styled('textarea', {
  background: 'transparent',
  fontSize: '$medium',
  // fontWeight: 'bold',
  marginBottom: '10px',
  resize: 'none',
  width: '100%',
  border: 'none',
  height: '30px',
  padding: '5px 2px',
  borderBottom: 'solid 1px #d5d5d5',
  overflow: 'hidden',
  outline: 'none',

  '&:focus': {
    borderColor: 'black',
  },

  variants: {
    alert: {
      true: {
        borderColor: 'red',
        outlineColor: 'red',
      },
    },
  },
});

export const DivButtons = styled('div', {
  width: 'max-content',
  margin: '40px auto 0',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  '@400': {
    flexDirection: 'column',
    gap: '30px'
  },
});

export const DivSpaceBetween = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const DivAlignedCenter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const Button = styled('button', {
  border: 'solid 1px gray',
  background: 'none',
  borderRadius: '5px',
  padding: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '$textColorBlur',
  fontSize: '14px',

  '&:hover': {
    color: '$primary',
    borderColor: '$primary',
  },
});

export const Text = styled('span', {
  fontSize: '$xSmall',
  // fontWeight: 'bold',
  color: '$textColorBlur',
  fontStyle: 'italic',
  width: 'max-content',
  marginRight: '10px',
});

export const BtnCloseOption = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  // color: '#cb3939',
  color: '$textColorGrey',
  height: 'max-content',
});

export const OptionalInput = styled('input', Text, {
  fontSize: '14px',
  padding: '2px',
  border: 'solid 1px #cbcbcb',
  borderRadius: '2px',
  background: '$inputBackground',
  fontStyle: 'initial',
});

export const BtnLink = styled('a', Link, {
  display: 'block',
  width: 'max-content',
  margin: '0 auto',
  borderRadius: '5px',
  padding: '7px 10px',
  background: '$primary',
  textDecoration: 'none',
  color: '$bgWhite',
});
