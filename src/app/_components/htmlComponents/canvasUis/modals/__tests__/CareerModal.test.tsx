import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { CareerModal } from '../CareerModal';

describe('CareerModal', () => {
  it('renders miridih career details when CAREER_MIRIDIH is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.CAREER_MIRIDIH);

    render(
      <Provider store={store}>
        <CareerModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /미리디/ })).toBeInTheDocument();
    expect(screen.getAllByText(/AX 디자인시스템/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/React Aria/).length).toBeGreaterThan(0);
  });

  it('renders archidraw career details when CAREER_ARCHIDRAW is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.CAREER_ARCHIDRAW);

    render(
      <Provider store={store}>
        <CareerModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /아키드로우/ })).toBeInTheDocument();
  });
});
