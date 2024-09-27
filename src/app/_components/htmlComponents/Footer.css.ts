import { style } from '@vanilla-extract/css';

export const footerWrapperStyle = style({
  position: 'fixed',
  bottom: '0',
  left: '0',
  transform: 'translateX(50%)',
  width: '50%',
  height: '50px',
  fontSize: '12px',
  color: '#555555',
});
