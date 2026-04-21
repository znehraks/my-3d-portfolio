'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { certifications } from '@/content/resume';
import { Modal } from '../../../common/Modal';

export function CertificationsModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const isOpen = useMemo(() => openModalKey === MODAL_KEY.CERTIFICATIONS, [openModalKey]);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="자격증" ariaLabel="자격증 목록">
      <ul className="space-y-2 text-[14px] text-[#3c2910]">
        {certifications.map((c) => (
          <li key={c.title} className="flex items-baseline justify-between gap-3 rounded-md bg-white/40 px-3 py-2">
            <span className="font-medium">{c.title}</span>
            <time className="text-[12px] text-[#6b4a1a]">{c.date}</time>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
