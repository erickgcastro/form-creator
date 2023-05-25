import { styled } from 'src/styles/stitches.config';

export const CardContainer = styled('div', {
  width: 'max-content',
  margin: '25px auto ',
  '@720': {
    width: '100vw',
  },
});

export const FormCard = styled('div', {
  fontSize: '$small',
  width: '43.75rem',
  height: 'max-content',
  background: '$bgWhite',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '$border',
  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  padding: '20px',
  position: 'relative',

  '@720': {
    padding: '20px 10px',
    width: '100%',
  },
});

export const Title = styled('div', FormCard, {
  'div.texts': {
    marginBottom: '20px',
    '@320': {
      marginBottom: '30px',
    },
  },

  'p.title': {
    fontSize: '$medium',
    fontWeight: 'bold',
    marginBottom: '10px',
  },

  'p.desc': {
    fontSize: '$small',
    color: '$textColorBlur',
  },

  span: {
    fontSize: '$xSmall',
    fontWeight: 'bold',
    color: '$textColorGrey',
    fontStyle: 'italic',
    width: 'max-content',
  },
});

export const InfoArea = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@320': {
    gap: '10px',
    flexDirection: 'column-reverse',
  },
});

export const AlertMessage = styled('span', {
  fontSize: '$xSmall',
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '$textColorGrey',
  margin: '0 auto',
  width: 'max-content',
  display: 'block',
});

export const InputText = styled('textarea', {
  fontSize: '15px',
  fontWeight: 'bold',
  color: '$textColorBlur',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: '41px',
  height: '41px',
  padding: '10px',
  background: '$inputBackground',
  border: 'solid 1px $inputBorder',
  borderRadius: '5px',
  resize: 'none',
  overflow: 'hidden',
});

export const InputRadio = styled('button', {
  position: 'absolute',
  color: '$textColorBlur',
  top: '2px',
  width: '18px',
  height: '18px',
  borderRadius: '999px',
  background: '$inputBackground',
  border: 'solid 1px $inputBorder',
  cursor: 'pointer',

  variants: {
    checked: {
      true: {
        background: '$primary',
        borderColor: '$primary',
      },
    },
  },
});
