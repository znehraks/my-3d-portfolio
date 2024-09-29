import { style } from '@vanilla-extract/css';

export const noticeBannerWrapperStyle = style({
  position: 'fixed',
  fontSize: '36px',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  height: '100px',
  backgroundColor: '#00000055',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '10px',
  color: 'white',
  zIndex: 1,
  '@media': {
    'screen and (max-width: 501px)': {
      fontSize: '14px',
      height: '50px',
    },
  },
});

export const noticeBannerWrapperVisibleStyle = style([
  noticeBannerWrapperStyle,
  {
    display: 'flex',
  },
]);

export const noticeBannerWrapperInvisibleStyle = style([
  noticeBannerWrapperStyle,
  {
    display: 'none',
  },
]);
