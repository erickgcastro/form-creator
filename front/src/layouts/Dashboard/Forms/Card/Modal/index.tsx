import { useState } from 'react';
import type { Form } from 'src/types';

import useCardModal from './useCardModal';
import ShareModal from 'src/components/ShareModal';
import * as S from './styles';

type Props = {
  data: Form;
  closeModal: (s: any) => void;
  removeItemById: (id: string) => void;
};

const ModalFormCard = ({ data, closeModal, removeItemById }: Props) => {
  const [toggleShare, setToggleShare] = useState(false);
  const { openNewTab, modalRef, deleteAlert, deleteForm } = useCardModal({
    hash: data.hash,
    formId: data.id,
    closeModal,
    removeItemById,
  });

  return (
    <S.Modal ref={modalRef}>
      {toggleShare && <ShareModal slug={data.hash} closeModal={setToggleShare} />}

      <S.ModalOption onClick={deleteForm} dark={deleteAlert}>
        <S.Text css={{ color: deleteAlert ? 'yellow' : 'red' }}>
          {deleteAlert ? 'Click to confirm' : 'Delete'}
        </S.Text>
      </S.ModalOption>

      <S.ModalOption onClick={() => setToggleShare(true)}>
        <S.Text>Share</S.Text>
      </S.ModalOption>

      <S.LinkOption href={`/forms/${data.hash}/answers`}>
        
        <S.Text>See answers</S.Text>
      </S.LinkOption>

      <S.ModalOption onClick={openNewTab}>
        <S.Text>Open in new tab</S.Text>
      </S.ModalOption>
    </S.Modal>
  );
};

export default ModalFormCard;
