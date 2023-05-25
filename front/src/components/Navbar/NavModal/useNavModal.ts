import { useEffect, useRef } from 'react';
import { useLogout } from 'src/hooks';

const useNavModal = (closeModal: (cb: boolean) => void) => {
  const modalRef = useRef(null);
  const handleLogout = useLogout();

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
  }, [closeModal]);

  return { modalRef, handleLogout };
};

export default useNavModal;
