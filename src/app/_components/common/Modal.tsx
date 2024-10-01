import React from 'react';
import { modalStyles } from './Modal.css';
import { clsx } from 'clsx';

export function Modal({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(modalStyles.backdrop, modalStyles.scaleVariants[isOpen ? 'open' : 'closed'])}
      onKeyUp={() => {}}
      onClick={() => {
        onClose();
      }}
    >
      <div className={clsx(modalStyles.base)}>{children}</div>
    </div>
  );
}
