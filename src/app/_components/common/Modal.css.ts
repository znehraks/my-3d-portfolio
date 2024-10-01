import { style, styleVariants } from '@vanilla-extract/css';

const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  width: '100dvw',
  height: '100dvh',
});
const base = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 101,
  width: '300px',
  height: '300px',
  backgroundColor: '#FFECB8',
  borderRadius: '20px',
  padding: '20px',
  fontSize: '18px',
});

const scaleVariants = styleVariants({
  closed: {
    scale: 0,
  },
  open: {
    scale: 1,
  },
});

export const modalStyles = {
  backdrop,
  base,
  scaleVariants,
};
