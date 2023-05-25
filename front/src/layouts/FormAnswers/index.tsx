import { useAnswersContext } from 'src/context/AnswersContext';

import Navbar from 'src/components/Navbar';
import Pagination from 'src/components/Pagination';
import * as S from 'src/components/Form';
import Header from './Header';
import AnswerCard from './AnswerCard';
import EmptyArrayMessage from './EmptyArrayMessage';

const AnswersLayout = () => {
  const { answersState, page, changePage } = useAnswersContext();

  return (
    <>
      <Navbar page='answers' blockUser={answersState.createdBy} />
      <S.CardContainer>
        <Header
          answersLen={answersState.answers_length}
          correctedLen={answersState.corrected_length}
        />

        {!answersState.users_answers.length && <EmptyArrayMessage />}

        {answersState.users_answers.map((item) => (
          <AnswerCard key={item.id} data={item} average={answersState.average} />
        ))}

        {page === 1 && answersState.users_answers.length === 10 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}

        {page !== 1 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}
      </S.CardContainer>
    </>
  );
};

export default AnswersLayout;
