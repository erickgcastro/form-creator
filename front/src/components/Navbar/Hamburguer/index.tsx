import { useState } from 'react';
import type { TypesNavbar } from 'src/types';
import Modal from './Modal';
import * as S from './styles';

interface Types extends TypesNavbar {
  setShareModal: (s: any) => void;
}

const Hamburguer = ({ page, redirect, blockUser, setShareModal }: Types) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <Modal {...{ page, redirect, blockUser, setShareModal, setIsModalOpen }} />
      )}
      <S.Container onClick={() => setIsModalOpen(true)}>
        <span className='material-icons' style={{ fontSize: '27px' }} translate='no'>
          {isModalOpen ? 'close' : 'menu'}
        </span>
      </S.Container>
    </>
  );
};

export default Hamburguer;
