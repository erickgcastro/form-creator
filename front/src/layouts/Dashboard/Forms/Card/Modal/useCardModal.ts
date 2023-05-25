import { useState, useEffect, useRef } from 'react';
import { AxiosApi, ThrowToastError } from 'src/services';

type Types = {
  hash: string;
  formId: string;
  closeModal: (s: any) => void;
  removeItemById: (id: string) => void;
};

const useCardModal = ({ hash, closeModal, removeItemById, formId }: Types) => {
  const modalRef = useRef(null);
  const [deleteAlert, setDeleteAlert] = useState<boolean>(false);

  const deleteForm = () => {
    if (deleteAlert) {
      AxiosApi().delete('/forms/' + hash)
        .then(() => removeItemById(formId))
        .catch((err: any) => ThrowToastError(err));
    } else {
      setDeleteAlert(true);
      setTimeout(() => {
        setDeleteAlert(false);
      }, 1600);
    }
  };

  const openNewTab = () => {
    const page = process.env.NEXT_PUBLIC_BASE_URL + '/forms/' + hash;
    window.open(page);
    closeModal(false);
  };

  useEffect(() => {
    const checkClick = (e: any) => {
      if (modalRef.current) {
        //@ts-ignore - type never
        if (!modalRef.current.contains(e.target)) {
          closeModal(false);
        }
      }
    };

    document.addEventListener('mousedown', checkClick);
    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [closeModal, modalRef]);

  return { openNewTab, modalRef, deleteAlert, deleteForm };
};

export default useCardModal;
