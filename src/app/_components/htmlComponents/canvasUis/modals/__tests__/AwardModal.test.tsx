import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { AwardModal } from '../AwardModal';

describe('AwardModal', () => {
  it('renders KOPIS details when AWARD_KOPIS is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.AWARD_KOPIS);

    render(
      <Provider store={store}>
        <AwardModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /KOPIS/ })).toBeInTheDocument();
    expect(screen.getByText(/공연예술백신/)).toBeInTheDocument();
  });

  it('renders gold medal for Myongji competition', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.AWARD_MYONGJI);

    render(
      <Provider store={store}>
        <AwardModal />
      </Provider>,
    );

    expect(await screen.findByText(/금메달/)).toBeInTheDocument();
  });
});
