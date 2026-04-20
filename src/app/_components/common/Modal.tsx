'use client';

import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { createPortal } from 'react-dom';

export function Modal({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return (
    <>
      {createPortal(
        <div
          role="button"
          tabIndex={0}
          className={clsx('fixed inset-0 z-[100] h-dvh w-dvw', isOpen ? 'scale-100' : 'scale-0')}
          onKeyUp={() => {}}
          onClick={() => {
            onClose();
          }}
        >
          <div className="fixed left-1/2 top-1/2 z-[101] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[#FFECB8] p-5 text-[18px]">
            {children}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
