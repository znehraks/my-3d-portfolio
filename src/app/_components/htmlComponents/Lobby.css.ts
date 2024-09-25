import { style } from '@vanilla-extract/css';

export const loginContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  height: '100%',
  backgroundColor: '#85e6ff',
});

export const loginTitle = style({
  fontSize: '22px',
  fontWeight: '700',
});

export const characterCanvasContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  width: '1200px',
  height: '80%',
});

export const characterTuningWrapper = style({
  width: '100%',
  height: '80%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const characterCanvasWrapper = style({
  flex: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const inputStyle = style({
  border: 'none',
  outline: 'none',
  padding: '12px 10px',
  borderRadius: '8px',
  width: '280px',
  fontSize: '18px',
});

export const nextBtnStyle = style({
  padding: '10px',
  width: '280px',
  fontSize: '14px',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  fontWeight: '600',
  transitionDuration: '0.2s',
});

export const nextBtnValidStyle = style([
  nextBtnStyle,
  {
    backgroundColor: '#6731a1',
    color: '#ffffff',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#340070',
      color: '#ffffff',
    },
  },
]);

export const nextBtnDisabledStyle = style([
  nextBtnStyle,
  {
    backgroundColor: '#8aceff',
    color: '#ededed',
    cursor: 'not-allowed',
  },
]);

export const prevBtnStyle = style({
  padding: '10px',
  width: '280px',
  fontSize: '14px',
  borderRadius: '8px',
  border: 'none',
  outline: 'none',
  fontWeight: '600',
  color: '#666666',
  cursor: 'pointer',
});
