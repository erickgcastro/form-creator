import { useFormCreator } from 'src/context';
import * as S from './styles';

const BtnAddQuestion = () => {
  const { addQuestion } = useFormCreator();

  return (
    <S.Button onClick={addQuestion}>
      Add question
      <span className='material-icons' translate='no'>
        add
      </span>
    </S.Button>
  );
};

export default BtnAddQuestion;
