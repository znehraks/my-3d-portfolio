import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { ProfileModal } from '../ProfileModal';

describe('ProfileModal', () => {
  it('renders resume tagline when INTRO_ABOUT modal is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.INTRO_ABOUT);

    render(
      <Provider store={store}>
        <ProfileModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /유정민/ })).toBeInTheDocument();
    const aiCreatorMatches = screen.getAllByText(/AI Creator/i);
    expect(aiCreatorMatches.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/개발 철학/)).toBeInTheDocument();
  });
});
