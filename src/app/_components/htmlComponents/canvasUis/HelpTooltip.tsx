'use client';

import clsx from 'clsx';
import { IsHelpTooltipVisibleAtom } from '@/store';
import { useAtomValue } from 'jotai';
import { createPortal } from 'react-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getBrowserDeviceInfo } from '../../getBrowserDeviceInfo';

export function HelpTooltip() {
  const { device } = getBrowserDeviceInfo();
  const ref = useRef<HTMLDivElement>(null);
  const isHelpTooltipVisible = useAtomValue(IsHelpTooltipVisibleAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const calculatePosition = useCallback(
    (e: PointerEvent) => {
      if (!ref.current) return;
      if (!isHelpTooltipVisible) return;
      ref.current.style.transform = `translate(${e.clientX + 10}px, ${e.clientY - 30}px)`;
    },
    [isHelpTooltipVisible],
  );

  useEffect(() => {
    window.addEventListener('pointermove', calculatePosition);
    return () => {
      window.removeEventListener('pointermove', calculatePosition);
    };
  }, [calculatePosition]);

  const fontColor = useMemo(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 16) {
      return '#444444';
    }

    return '#eeeeee';
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={ref}
      className={clsx(
        'fixed left-0 top-0 z-[100] text-[18px]',
        isHelpTooltipVisible ? 'block animate-tooltip-blink' : 'hidden',
      )}
      style={{
        color: fontColor,
      }}
    >
      {device === 'Desktop' ? '클릭해서 이동해 보세요.' : '터치해서 이동해 보세요.'}
    </div>,
    document.body,
  );
}
