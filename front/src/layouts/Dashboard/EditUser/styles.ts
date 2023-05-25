import { styled, keyframes } from 'src/styles/stitches.config';

export const EditArea = styled('div', {
  display: 'flex',
  gap: '30px',

  '@650': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const ImageArea = styled('div', {
  position: 'relative',
  height: 'max-content',

  button: {
    visibility: 'hidden',
  },

  '&:hover': {
    button: {
      visibility: 'visible',
    },
  },
});

export const BtnUploadImage = styled('button', {
  position: 'absolute',
  zIndex: 100,
  bottom: 0,
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'solid 1px $primary',
  borderRadius: '5px',
  fontSize: '$small',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const UserImage = styled('div', {
  height: '140px',
  width: '140px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '5px',
  border: '$border',
});

export const FieldTitle = styled('span', {
  display: 'block',
  fontSize: '$xSmall',
  color: '$textColorBlur',
  marginBottom: '3px',
  marginLeft: '2px',
});

const hideBorder = keyframes({
  '50%': {
    borderColor: '$primary',
  },
  '100%': {
    borderColor: '$inputBorder',
  },
});

export const InputText = styled('input', {
  padding: '6px 7px',
  width: '100%',
  fontSize: '$xSmall',
  background: '$inputBackground',
  border: 'solid 1px $inputBorder',
  borderRadius: '5px',

  variants: {
    focus: {
      true: {
        animation: `${hideBorder} .5s linear`,
      },
    },
  },
});

export const BtnsArea = styled('div', {
  display: 'flex',
  marginTop: '30px',
  justifyContent: 'space-between',
});

export const ButtonSubmit = styled('button', {
  padding: '5px 8px',
  borderRadius: '5px',
  cursor: 'pointer',
  background: '$primary',
  color: '$bgWhite',
  fontSize: '$xSmall',
  border: 'none',

  '&:hover': {
    background: '$primaryDark',
  },
});

export const BtnChangePass = styled(ButtonSubmit, {
  background: '#df2e2e',
  '&:hover': {
    background: '#c30f0f',
  },
});
