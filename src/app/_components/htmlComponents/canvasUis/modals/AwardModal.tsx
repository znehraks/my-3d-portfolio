'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { awards } from '@/content/resume';
import { IResumeAward } from '@/types';
import { Modal } from '../../../common/Modal';

const RANK_LABEL: Record<IResumeAward['rank'], string> = {
  gold: '🥇 금메달',
  silver: '🥈 은메달',
  bronze: '🥉 동메달',
};

const MODAL_TO_AWARD_ID: Partial<Record<MODAL_KEY, string>> = {
  [MODAL_KEY.AWARD_KOPIS]: 'kopis-bigdata-2nd',
  [MODAL_KEY.AWARD_INCHEON]: 'incheon-public-data-2nd',
  [MODAL_KEY.AWARD_MYONGJI]: 'myongji-convergence-1st',
};

function AwardBody({ award }: { award: IResumeAward }) {
  return (
    <div className="space-y-3 text-[14px] text-[#3c2910]">
      <p className="text-[13px] text-[#6b4a1a]">
        {RANK_LABEL[award.rank]} · <time>{award.date}</time>
      </p>
      <p className="text-[14px] leading-relaxed">{award.description}</p>
      {award.stack?.length ? (
        <div className="flex flex-wrap gap-1">
          {award.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-[#c59848]/30 px-2 py-[2px] text-[11px] text-[#3c2910]"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function AwardModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  const activeAward = useMemo<IResumeAward | null>(() => {
    if (!openModalKey) return null;
    const awardId = MODAL_TO_AWARD_ID[openModalKey];
    if (!awardId) return null;
    return awards.find((a) => a.id === awardId) ?? null;
  }, [openModalKey]);

  return (
    <Modal
      isOpen={Boolean(activeAward)}
      onClose={handleClose}
      title={activeAward?.title}
      ariaLabel={activeAward ? `${activeAward.title} 상세` : '수상 모달'}
    >
      {activeAward ? <AwardBody award={activeAward} /> : null}
    </Modal>
  );
}
