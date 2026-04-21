'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { profile } from '@/content/resume';
import { Modal } from '../../../common/Modal';

export function ContactsModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const isOpen = useMemo(() => openModalKey === MODAL_KEY.CONTACTS, [openModalKey]);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  const { contact } = profile;

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="연락처" ariaLabel="연락처 및 링크">
      <ul className="space-y-3 text-[14px] text-[#3c2910]">
        <li className="flex items-center gap-2">
          <span aria-hidden>📧</span>
          <a className="underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden>🐙</span>
          <a className="underline" href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden>📝</span>
          <a className="underline" href={contact.velog} target="_blank" rel="noreferrer">
            velog 블로그
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden>📘</span>
          <a className="underline" href={contact.tistory} target="_blank" rel="noreferrer">
            tistory (Gap알자)
          </a>
        </li>
        {contact.portfolioLegacy ? (
          <li className="flex items-center gap-2">
            <span aria-hidden>🗂</span>
            <a className="underline" href={contact.portfolioLegacy} target="_blank" rel="noreferrer">
              구 포트폴리오 사이트
            </a>
          </li>
        ) : null}
        {contact.youtube ? (
          <li className="flex items-center gap-2">
            <span aria-hidden>🎬</span>
            <a className="underline" href={contact.youtube} target="_blank" rel="noreferrer">
              88ight YouTube
            </a>
          </li>
        ) : null}
      </ul>
    </Modal>
  );
}
