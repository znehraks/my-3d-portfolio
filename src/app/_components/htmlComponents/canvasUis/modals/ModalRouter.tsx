'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { ProfileModal } from './ProfileModal';
import { ContactsModal } from './ContactsModal';
import { CareerModal } from './CareerModal';
import { AIProjectModal } from './AIProjectModal';
import { AwardModal } from './AwardModal';
import { CertificationsModal } from './CertificationsModal';
import { EducationModal } from './EducationModal';

const VALID_MODAL_KEYS = new Set<string>(Object.values(MODAL_KEY));

/**
 * 테스트/딥링크용: `?modal=<MODAL_KEY>` 쿼리가 있으면 마운트 시점에 한 번
 * `OpenModalKeyAtom` 을 해당 값으로 세팅한다. 보안/UX 관점에서 URL 은
 * 읽기만 하고, 닫을 때 URL 을 조작하지는 않는다.
 */
function ModalQueryBridge() {
  const setOpenModalKey = useSetAtom(OpenModalKeyAtom);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const candidate = params.get('modal');
    if (!candidate) return;
    if (VALID_MODAL_KEYS.has(candidate)) {
      setOpenModalKey(candidate as MODAL_KEY);
    }
  }, [setOpenModalKey]);

  return null;
}

/**
 * OpenModalKeyAtom 값에 따라 적절한 모달을 렌더한다.
 * 각 모달 컴포넌트가 내부에서 atom을 구독하므로, 여기선 등록만 해두면 된다.
 */
export function ModalRouter() {
  return (
    <>
      <ModalQueryBridge />
      <ProfileModal />
      <ContactsModal />
      <CareerModal />
      <AIProjectModal />
      <AwardModal />
      <CertificationsModal />
      <EducationModal />
    </>
  );
}
