import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { ContactsModal } from '../ContactsModal';

describe('ContactsModal', () => {
  it('renders mailto link when CONTACTS modal is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.CONTACTS);

    render(
      <Provider store={store}>
        <ContactsModal />
      </Provider>,
    );

    const mailto = await screen.findByRole('link', { name: /znehraks@gmail\.com/ });
    expect(mailto).toHaveAttribute('href', 'mailto:znehraks@gmail.com');
  });
});
