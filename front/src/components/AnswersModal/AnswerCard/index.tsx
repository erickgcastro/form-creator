import { memo, useEffect, useState, useMemo } from 'react';
import { FormCard } from 'src/components/Form';
import type { Answers, CorrectAnswers } from 'src/types';
import * as S from './styles';
import useAnswerCard from './useAnswerCard';

type Props = {
  data: Answers;
  setAnswers: (s: any) => void;
};

const AnswerCard = ({ data, setAnswers }: Props) => {
  const { checkIfBool, setValue, value } = useAnswerCard(data, setAnswers);

  const borderColor = checkIfBool ? false : value ? 'green' : 'red';

  return (
    <FormCard key={data.id}>
      <p style={{ marginBottom: '30px' }}>{data.question.title}</p>
      <S.TextAnswer border={borderColor}>{data.content}</S.TextAnswer>
      <S.DivButtons>
        <S.ConfirmBtn
          color={checkIfBool || !value ? 'red' : 'blur'}
          onClick={() => setValue(false)}
        >
          <span className='material-icons' translate='no'>
            close
          </span>
        </S.ConfirmBtn>
        <S.ConfirmBtn
          color={checkIfBool || value ? 'green' : 'blur'}
          onClick={() => setValue(true)}
        >
          <span className='material-icons' translate='no'>
            check
          </span>
        </S.ConfirmBtn>
      </S.DivButtons>
    </FormCard>
  );
};

export default memo(AnswerCard);
