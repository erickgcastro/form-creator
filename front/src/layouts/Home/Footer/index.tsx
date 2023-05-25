import { styled } from 'src/styles/stitches.config';

export const Container = styled('div', {
  height: 'auto',
  minHeight: '200px',
  background: '#222222',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
});

export const Text = styled('span', {
  color: '#fff',
  fontSize: '$xSmall',
  variants: {
    hover: {
      true: {
        '&:hover': {
          color: '#a286f9',
        },
      },
    },
  },
});

const Footer = () => {
  return (
    <Container>
      <Text>by Erick Gabriel</Text>
    </Container>
  );
};

export default Footer;
