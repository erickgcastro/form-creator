import { styled } from 'src/styles/stitches.config';

export const Container = styled('form', {
  background: '$bgWhite',
  maxHeight: 'max-content',
  width: '350px',
  borderRadius: '5px',
  padding: '20px',
  position: 'relative',
});

export const LoadingArea = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const BtnCloseModal = styled('button', {
  position: 'absolute',
  right: '10px',
  top: '10px',
  background: 'transparent',
  border: 'none',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
});

export const PageOption = styled('button', {
  background: 'none',
  border: 'none',
  color: '$textColorGrey  ',
  fontSize: '$small',
  fontWeight: 'bold',
  padding: '5px',
  cursor: 'pointer',
  borderBottom: 'solid 1px transparent',

  variants: {
    focus: {
      true: {
        color: '$textColor',
        borderBottom: 'solid 1px $primary',
      },
    },
  },
});

export const InputsArea = styled('div', {
  marginTop: '23px',
});

export const InputName = styled('label', {
  fontSize: '14px',
  color: '$textColorBlur',
  display: 'block',
  marginBottom: '5px',
});

export const Input = styled('input', {
  minWidth: '100%',
  maxWidth: '100%',
  background: '$inputBackground',
  border: 'solid 1px $inputBorder',
  borderRadius: '5px',
  padding: '6px 9px',
  fontSize: '$xSmall',
  marginBottom: '13px',

  '&:focus': {
    background: 'rgba(99, 47,245, 5%)',
    outline: 'solid 1px rgba(99, 47,245, 45%) ',
  },
});

export const ForgotPassword = styled('button', {
  border: 'none',
  background: 'transparent',
  display: 'block',
  margin: '5px auto',
  width: 'max-content',
  color: '$primary',
  fontSize: '13px',
  fontWeight: 'bold',
  marginBottom: '13px',
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const BtnSubmit = styled('button', {
  display: 'block',
  margin: '20px auto 10px',
  border: 'none',
  background: '$primary',
  color: '#fff',
  width: '220px',
  height: '33px',
  fontSize: '$xSmall',
  borderRadius: '5px',
  cursor: 'pointer',
});
