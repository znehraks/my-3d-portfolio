'use client';

import { useAtomValue } from 'jotai';
import { noticeBannerWrapperInvisibleStyle, noticeBannerWrapperVisibleStyle } from './NoticeBanner.css';
import { useTypingEffect } from './useTypingEffect';
import { IsLoadCompletedAtom } from '@/store';

export function NoticeBanner() {
  const isLoadCompleted = useAtomValue(IsLoadCompletedAtom);
  const { opacity, displayedText } = useTypingEffect({ text: 'znehraks(Design.C)의 공간에 온 걸 환영해요!' });

  if (!isLoadCompleted) return null;

  return (
    <div className={opacity ? noticeBannerWrapperVisibleStyle : noticeBannerWrapperInvisibleStyle}>{displayedText}</div>
  );
}
