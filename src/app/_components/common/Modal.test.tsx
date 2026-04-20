import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders children into a portal and closes when the backdrop is clicked', async () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen onClose={onClose}>
        <div>modal body</div>
      </Modal>,
    );

    expect(await screen.findByText('modal body')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
