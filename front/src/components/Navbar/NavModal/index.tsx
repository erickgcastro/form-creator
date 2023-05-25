import * as S from './styles';
import useNavModal from './useNavModal';

type TypeNavModal = {
  closeModal: (cb: boolean) => void;
};

const NavModal = ({ closeModal }: TypeNavModal) => {
  const { modalRef, handleLogout } = useNavModal(closeModal);

  return (
    <S.Container ref={modalRef}>
      <S.LinkOptionBtn href='/dashboard/edit-user'>
        <S.Text>Edit user</S.Text>
      </S.LinkOptionBtn>
      <S.OptionBtn tabIndex={0} onClick={handleLogout}>
        <S.Text>Logout</S.Text>
        <span style={{ fontSize: 20 }} className='material-icons' translate='no'>
          logout
        </span>
      </S.OptionBtn>
    </S.Container>
  );
};

export default NavModal;
