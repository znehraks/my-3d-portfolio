'use client';

import { useAtom } from 'jotai';
import { Modal } from '../../common/Modal';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { useCallback, useMemo } from 'react';

export function WoodenSignModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const isOpen = useMemo(() => openModalKey === MODAL_KEY.WOODEN_SIGN, [openModalKey]);

  const handleClose = useCallback(() => {
    setOpenModalKey(null);
  }, [setOpenModalKey]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div>hi</div>
    </Modal>
  );
}
