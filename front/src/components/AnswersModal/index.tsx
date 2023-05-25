import type { UsersAnswers } from 'src/types';
import { WindowBlur } from '../WindowBlur';
import AnswerCard from './AnswerCard';
import Loading from '../Loading';
import * as S from './styles';
import useAnswersModal from './useAnswersModal';

type ModalProps = {
  data: UsersAnswers;
  closeModal: () => void;
};

const AnswersModal = ({ data, closeModal }: ModalProps) => {
  const { loading, handleSubmit, setAnswers } = useAnswersModal(data.id);

  return (
    <WindowBlur onClick={closeModal}>
      <S.ContentArea onClick={(e) => e.stopPropagation()}>
        <S.CloseBtn onClick={closeModal}>
          <span className='material-icons' translate='no'>
            close
          </span>
        </S.CloseBtn>

        <S.Title>{data.author.name}</S.Title>

        {data.answers.map((item) => (
          <AnswerCard data={item} key={item.id} setAnswers={setAnswers} />
        ))}

        {!loading ? <S.Submit onClick={handleSubmit}>Submit</S.Submit> : <Loading />}
      </S.ContentArea>
    </WindowBlur>
  );
};

export default AnswersModal;
