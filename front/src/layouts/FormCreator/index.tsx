import { useFormCreator } from 'src/context';

import Navbar from 'src/components/Navbar';
import { CardContainer } from 'src/components/Form';
import ShareForm from 'src/components/ShareForm';
import HeaderForm from './Header';
import * as S from './styles';
import BtnAddQuestion from './BtnAddQuestion';
import BtnSubmit from './BtnSubmit';
import Question from './Question';
import LoadingWithNavbar from 'src/components/LoadingWithNavbar';

const FormCreator = () => {
  const { data, loading, response } = useFormCreator();

  if (loading) return <LoadingWithNavbar />;

  if (response) {
    return (
      <>
        <Navbar />
        <ShareForm />
        <S.BtnLink href={`/forms/${response?.hash}`}>See form</S.BtnLink>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <CardContainer>
        <HeaderForm />

        {data.questions.map((item) => (
          <Question key={item.id} data={item} />
        ))}

        <S.DivButtons>
          <BtnAddQuestion />
          {!!data.questions.length && <BtnSubmit />}
        </S.DivButtons>
      </CardContainer>
    </>
  );
};

export default FormCreator;
