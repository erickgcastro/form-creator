import { styled } from '@stitches/react';

export const Container = styled('div', {
  position: 'relative',
  minWidth: '240px',
  maxWidth: '240px',
  height: '300px',
  background: '#fff',
  boxShadow: '0 5px 10px rgba(0,0,0,15%)',
  overflow: 'hidden',
});

export const IconArea = styled('div', {
  background: '$primary',
  // background: '#541fe9',
  // background: '#3E3E3E',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TextArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '22px 10px 0',
  gap: '20px',
});

export const Title = styled('h3', { fontSize: '$small' });

export const Desc = styled('p', {
  fontSize: '$xSmall',
  textAlign: 'center',
});

export const Border = styled('div', {
  position: 'absolute',
  height: '4px',
  width: '50%',
  left: '25%',
  borderRadius: '2px',
  bottom: '10px',
  margin: '0 auto',
  background: '$background',
});
