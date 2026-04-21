'use client';

import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { useTypingEffect } from './useTypingEffect';
import { IsLoadCompletedAtom } from '@/store';
import { profile } from '@/content/resume';

export function NoticeBanner() {
  const isLoadCompleted = useAtomValue(IsLoadCompletedAtom);
  const { opacity, displayedText } = useTypingEffect({
    text: `안녕하세요, ${profile.roleTagline} ${profile.name}입니다.`,
  });

  if (!isLoadCompleted) return null;

  return (
    <div
      className={clsx(
        'fixed left-1/2 top-5 z-[1] h-[100px] w-4/5 -translate-x-1/2 items-center justify-center rounded-lg bg-black/35 px-4 text-center text-2xl text-white max-[501px]:h-[60px] max-[501px]:text-[13px]',
        opacity ? 'flex' : 'hidden',
      )}
    >
      {displayedText}
    </div>
  );
}
