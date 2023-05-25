import { useEffect, useMemo, useState } from 'react';
import { Answers, CorrectAnswers } from 'src/types';

const useAnswerCard = (data: Answers, setAnswers: (s: any) => void) => {
  const [value, setValue] = useState<boolean | null>(data.isCorrect);

  const checkIfBool = useMemo(() => value === null, [value]);

  useEffect(() => {
    if (value !== null) {
      setAnswers((state: CorrectAnswers) => {
        const pV = { ...state };
        const ans = pV.answers.find((item) => item.questionId === data.questionId);
        if (ans) {
          ans.isCorrect = value;
          return pV;
        }
        return {
          ...pV,
          answers: [
            ...pV.answers,
            {
              id: data.id,
              questionId: data.questionId,
              isCorrect: value,
            },
          ],
        };
      });
    }
  }, [value, data, setAnswers]);

  return {
    setValue,
    value,
    checkIfBool,
  };
};

export default useAnswerCard;
