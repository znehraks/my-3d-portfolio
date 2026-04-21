import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { CertificationsModal } from '../CertificationsModal';

describe('CertificationsModal', () => {
  it('lists major certifications when CERTIFICATIONS modal is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.CERTIFICATIONS);

    render(
      <Provider store={store}>
        <CertificationsModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /자격증/ })).toBeInTheDocument();
    const text = document.body.textContent ?? '';
    expect(text).toContain('투자자산운용사');
    expect(text).toContain('빅데이터 분석기사');
  });
});
