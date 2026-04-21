'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { profile } from '@/content/resume';
import { Modal } from '../../../common/Modal';

export function ProfileModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const isOpen = useMemo(() => openModalKey === MODAL_KEY.INTRO_ABOUT, [openModalKey]);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={profile.name} ariaLabel={`${profile.name} 자기소개`}>
      <p className="text-[13px] text-[#6b4a1a]">{profile.roleTagline}</p>
      <p className="mt-3 text-[14px] text-[#3c2910]">{profile.summary}</p>

      <section className="mt-5 space-y-3">
        <h3 className="text-[14px] font-semibold text-[#5a3a0e]">개발 철학</h3>
        <ul className="space-y-2 text-[13px] text-[#3c2910]">
          {profile.philosophy.map((p) => (
            <li key={p.title} className="rounded-md bg-white/40 px-3 py-2">
              <strong className="block text-[13px] font-semibold">{p.title}</strong>
              <span className="text-[12px] leading-relaxed">{p.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-5 text-[12px] text-[#6b4a1a]">
        💡 각 존을 돌아다니며 더 자세한 경력과 프로젝트를 확인해 보세요.
      </p>
    </Modal>
  );
}
