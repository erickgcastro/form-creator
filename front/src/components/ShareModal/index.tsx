import React from 'react';
import { WindowBlur } from 'src/components/WindowBlur';
import ShareForm from 'src/components/ShareForm';
import { useRemoveBodyScroll } from 'src/hooks';

type TypeShareMoal = {
  closeModal: (cb: boolean) => void;
  slug: string;
};

const ShareModal = ({ closeModal, slug }: TypeShareMoal) => {
  useRemoveBodyScroll();

  return (
    <WindowBlur style={{ alignItems: 'center' }} onClick={() => closeModal(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <ShareForm urlParam={String(slug)} closeCard={closeModal} />
      </div>
    </WindowBlur>
  );
};

export default ShareModal;
