import { fireEvent, render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it, vi } from 'vitest';
import { IsHelpTooltipVisibleAtom } from '@/store';
import { HelpTooltip } from './HelpTooltip';

vi.mock('../../getBrowserDeviceInfo', () => ({
  getBrowserDeviceInfo: () => ({
    browser: 'Google Chrome',
    device: 'Desktop',
    userAgent: 'test-agent',
  }),
}));

describe('HelpTooltip', () => {
  it('renders the desktop help message and updates its position on pointer move', async () => {
    const store = createStore();
    store.set(IsHelpTooltipVisibleAtom, true);

    render(
      <Provider store={store}>
        <HelpTooltip />
      </Provider>,
    );

    const tooltip = await screen.findByText('클릭해서 이동해 보세요.');
    expect(tooltip).toHaveClass('animate-tooltip-blink');

    fireEvent.pointerMove(window, { clientX: 50, clientY: 100 });

    expect((tooltip as HTMLDivElement).style.transform).toBe('translate(60px, 70px)');
  });
});
