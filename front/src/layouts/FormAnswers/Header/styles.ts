import { FormCard } from 'src/components/Form';
import { styled } from 'src/styles/stitches.config';

export const Header = styled('div', FormCard, {
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
});

export const Icon = styled('div', {
  display: 'inline-flex',
  fontWeight: 'bold',
  color: '$textColorBlur',
  gap: '5px',
});
