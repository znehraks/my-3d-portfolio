import { style } from '@vanilla-extract/css';

export const footerWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 24px',
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '50px',
  fontSize: '12px',
  color: '#555555',
  userSelect: 'none',
  '@media': {
    'screen and (max-width: 501px)': {},
  },
});

export const footerContainerStyle = style({
  width: '50%',
  '@media': {
    'screen and (max-width: 501px)': {
      width: '100%',
      fontSize: '10px',
    },
  },
});
