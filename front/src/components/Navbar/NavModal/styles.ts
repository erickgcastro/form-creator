import Link from 'next/link';
import { styled } from 'src/styles/stitches.config';

export const Container = styled('div', {
  position: 'absolute',
  right: '14px',
  top: '52px',
  width: '170px',
  height: 'max-content',
  background: '$bgWhite',
  boxShadow: '$modal',
  padding: '6px 3px',
  borderRadius: '5px',
  zIndex: 10,
});

export const OptionBtn = styled('span', {
  color: '$textColor',
  padding: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  textDecoration: 'none',

  '&:hover': {
    color: '$primary',
    background: '#F5F5F5',
  },
});

export const LinkOptionBtn = styled('a', Link, OptionBtn, {});

export const Text = styled('span', {
  fontSize: '15px',
});
