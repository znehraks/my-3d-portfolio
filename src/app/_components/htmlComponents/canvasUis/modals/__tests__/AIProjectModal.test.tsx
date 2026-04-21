import { render, screen } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { describe, expect, it } from 'vitest';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { AIProjectModal } from '../AIProjectModal';

describe('AIProjectModal', () => {
  it('renders the 88ight project when AI_88IGHT is open and embeds its YouTube video', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.AI_88IGHT);

    render(
      <Provider store={store}>
        <AIProjectModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /88ight/ })).toBeInTheDocument();
    const iframe = screen.getByTitle(/88ight virtual idol preview/i);
    expect(iframe.tagName).toBe('IFRAME');
    expect(iframe).toHaveAttribute('src', expect.stringContaining('youtube.com/embed/dVjV8UUJmpU'));
  });

  it('renders the RAG slackbot project when AI_RAG_BOT is open', async () => {
    const store = createStore();
    store.set(OpenModalKeyAtom, MODAL_KEY.AI_RAG_BOT);

    render(
      <Provider store={store}>
        <AIProjectModal />
      </Provider>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: /RAG/ })).toBeInTheDocument();
    expect(screen.getAllByText(/Pinecone/).length).toBeGreaterThan(0);
  });
});
