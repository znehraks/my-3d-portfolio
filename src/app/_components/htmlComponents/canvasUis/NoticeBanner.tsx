'use client';

import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { useTypingEffect } from './useTypingEffect';
import { IsLoadCompletedAtom } from '@/store';

export function NoticeBanner() {
  const isLoadCompleted = useAtomValue(IsLoadCompletedAtom);
  const { opacity, displayedText } = useTypingEffect({ text: 'znehraks(Design.C)의 공간에 온 걸 환영해요!' });

  if (!isLoadCompleted) return null;

  return (
    <div
      className={clsx(
        'fixed left-1/2 top-5 z-[1] h-[100px] w-4/5 -translate-x-1/2 items-center justify-center rounded-lg bg-black/35 px-2.5 text-center text-4xl text-white max-[501px]:h-[50px] max-[501px]:text-[14px]',
        opacity ? 'flex' : 'hidden',
      )}
    >
      {displayedText}
    </div>
  );
}
