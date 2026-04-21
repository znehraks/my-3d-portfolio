'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { education } from '@/content/resume';
import { Modal } from '../../../common/Modal';

export function EducationModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const isOpen = useMemo(() => openModalKey === MODAL_KEY.EDUCATION, [openModalKey]);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="학력" ariaLabel="학력 정보">
      <ul className="space-y-3 text-[14px] text-[#3c2910]">
        {education.map((edu) => (
          <li key={edu.school} className="rounded-md bg-white/40 px-3 py-2">
            <div className="font-semibold">{edu.school}</div>
            <div className="text-[13px] text-[#5a3a0e]">{edu.major}</div>
            <div className="text-[12px] text-[#6b4a1a]">
              <time>{edu.period}</time>
              {edu.gpa ? <span> · 학점 {edu.gpa}</span> : null}
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
