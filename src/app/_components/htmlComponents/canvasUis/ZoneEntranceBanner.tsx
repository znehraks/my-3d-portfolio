'use client';

import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { CurrentZoneAtom } from '@/store';
import { ZONE_BOUNDS } from '../../canvasComponents/zones/zoneBounds';

const ENTRANCE_DISPLAY_MS = 3_000;
const FADE_MS = 500;

export function ZoneEntranceBanner() {
  const currentZone = useAtomValue(CurrentZoneAtom);
  const [visibleZone, setVisibleZone] = useState<typeof currentZone>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!currentZone) {
      setOpacity(0);
      return;
    }
    setVisibleZone(currentZone);
    setOpacity(1);
    const hideTimer = setTimeout(() => setOpacity(0), ENTRANCE_DISPLAY_MS);
    const clearTimer = setTimeout(() => setVisibleZone(null), ENTRANCE_DISPLAY_MS + FADE_MS);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [currentZone]);

  if (!visibleZone) return null;
  const info = ZONE_BOUNDS[visibleZone];

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'pointer-events-none fixed left-1/2 top-[140px] z-[2] flex -translate-x-1/2 flex-col items-center gap-1 rounded-xl bg-black/60 px-6 py-3 text-white shadow-lg transition-opacity duration-500',
        'max-[501px]:top-[110px] max-[501px]:px-4 max-[501px]:py-2',
      )}
      style={{ opacity }}
    >
      <span className="text-2xl max-[501px]:text-lg">
        {info.emoji} {info.label}
      </span>
      <span className="text-xs text-white/80 max-[501px]:text-[11px]">{info.description}</span>
    </div>
  );
}
