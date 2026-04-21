import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { EducationModal } from '../EducationModal';

describe('EducationModal', () => {
  it('renders myongji university when EDUCATION modal is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.EDUCATION);

    render(
      <Provider store={store}>
        <EducationModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /학력/ })).toBeInTheDocument();
    expect(screen.getByText(/명지대학교/)).toBeInTheDocument();
  });
});
