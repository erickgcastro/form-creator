import { CardContainer, FormCard } from 'src/components/Form';
import Navbar from 'src/components/Navbar';
import * as S from './styles';

const CreatorMessage = () => {
  return (
    <>
      <Navbar page='dashboard' />
      <CardContainer>
        <FormCard>
          <S.Title>Create form and share</S.Title>
          <S.Button href='/forms'>Create form</S.Button>
        </FormCard>
      </CardContainer>
    </>
  );
};

export default CreatorMessage;
