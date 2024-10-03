import { keyframes, style } from '@vanilla-extract/css';

const blink = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const helpTooltipWrapperStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  fontSize: '18px',
});

export const helpTooltipWrapperVisibleStyle = style([
  helpTooltipWrapperStyle,
  {
    animation: `${blink} 1.5s ease-in-out infinite`,
    display: 'block',
  },
]);

export const helpTooltipWrapperHiddenStyle = style([
  helpTooltipWrapperStyle,
  {
    display: 'none',
  },
]);
