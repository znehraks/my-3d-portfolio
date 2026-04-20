import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { WoodenSignModal } from './WoodenSignModal';

describe('WoodenSignModal', () => {
  it('shows the wooden sign modal content when the matching modal key is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.WOODEN_SIGN);

    render(
      <Provider store={store}>
        <WoodenSignModal />
      </Provider>,
    );

    expect(await screen.findByText('hi')).toBeInTheDocument();
  });
});
