'use client';

import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { createPortal } from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  ariaLabel?: string;
}

export function Modal({ children, isOpen, onClose, title, ariaLabel }: IModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      role="button"
      tabIndex={0}
      aria-label="모달 닫기"
      data-state={isOpen ? 'open' : 'closed'}
      className={clsx(
        'fixed inset-0 z-[100] flex h-dvh w-dvw items-center justify-center bg-black/40 transition-opacity duration-200',
        isOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0',
      )}
      onKeyUp={() => {}}
      onClick={() => {
        onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel ?? title ?? '모달'}
        className={clsx(
          'relative z-[101] flex max-h-[80dvh] w-[min(90vw,720px)] flex-col overflow-hidden rounded-[20px] bg-[#FFECB8] text-[16px] shadow-xl',
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
      >
        {title ? (
          <header className="flex items-center justify-between gap-3 border-b border-black/10 px-5 py-4">
            <h2 className="text-[18px] font-bold text-[#333]">{title}</h2>
            <button
              type="button"
              aria-label="닫기"
              className="rounded-full px-2 py-1 text-[14px] text-[#666] hover:bg-black/10"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              ✕
            </button>
          </header>
        ) : null}
        <div className="overflow-y-auto px-5 py-4 leading-relaxed">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
