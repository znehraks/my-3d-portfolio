import { style } from '@vanilla-extract/css';

export const minimapWrapperStyle = style({
  position: 'fixed',
  width: '200px',
  height: '200px',
  right: '50px',
  bottom: '50px',
  backgroundColor: '#00000055',
  rotate: '45deg',
  selectors: {
    '&.visible': {
      display: 'block',
    },
    '&.invisible': {
      display: 'none',
    },
  },
});

export const playerPointStyle = style({
  position: 'absolute',
  top: '100px',
  left: '100px',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'lime',
  selectors: {
    '&.me-point': {
      backgroundColor: 'red',
    },
    '&.other-point': {
      backgroundColor: 'lime',
    },
  },
});
