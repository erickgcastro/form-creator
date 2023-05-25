import * as S from './styles';

const Header = ({ showModal }: { showModal: (s: any) => void }) => {
  return (
    <S.Container>
      <S.ContentArea>
        <S.Logo translate='no'>LOGO</S.Logo>

        <S.Nav>
          <S.UlNav>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#service'>Services</a>
            </li>
            <li>
              <a href='#about'>About us</a>
            </li>
          </S.UlNav>
          <S.BtnAuth onClick={showModal}>Get Started</S.BtnAuth>
        </S.Nav>
      </S.ContentArea>
    </S.Container>
  );
};

export default Header;
