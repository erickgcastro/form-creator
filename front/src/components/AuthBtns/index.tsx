import { useState } from 'react';
import AuthModal from '../AuthModal';
import * as S from './styles';

const AuthBtns = ({ redirect, hidden }: { redirect?: string; hidden?: true }) => {
  const [isModalOpen, setIsModalOpen] = useState<null | boolean>(null);

  const closeModal = () => {
    setIsModalOpen(null);
  };

  return (
    <>
      <S.AuthArea style={{ gap: '10px' }} hidden={hidden} >
        {typeof isModalOpen === 'boolean' && (
          <AuthModal page={isModalOpen} redirect={redirect} closeModal={closeModal} />
        )}
        <S.LoginButton focus={true} onClick={() => setIsModalOpen(false)}>
          Signin
        </S.LoginButton>
        <S.LoginButton onClick={() => setIsModalOpen(true)}>Signup</S.LoginButton>
      </S.AuthArea>
    </>
  );
};

export default AuthBtns;
