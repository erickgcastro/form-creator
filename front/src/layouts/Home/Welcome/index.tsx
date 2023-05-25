import * as S from './styles';

const Welcome = ({ showModal }: { showModal: (s: any) => void }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo translate='no'>LOGO</S.Logo>
        <S.Title>Create your forms quickly and easily</S.Title>
        <S.BtnAuth onClick={showModal}>Get started</S.BtnAuth>
      </S.Content>
    </S.Container>
  );
};

export default Welcome;
