import { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import { usePagination } from 'src/hooks/usePagination';
import type { CorrectAnswers, FormAnswers } from 'src/types';

type TypesAnswersContext = {
  answersState: FormAnswers;
  updateAnswer: (dto: CorrectAnswers, value: number, increment: boolean) => void;
  changePage: (page?: number, limit?: number) => void;
  loading: boolean;
  page: number;
};

export const AnswersContext = createContext({} as TypesAnswersContext);

type Props = {
  children: ReactNode;
  data: FormAnswers;
};

export const AnswersProvider = ({ data, children }: Props) => {
  const [answersState, setState] = useState(data);
  const {
    changePage,
    data: dataPag,
    loading,
    page,
  } = usePagination<any>({ route: '/answers', blockFirstPage: true });

  useEffect(() => {
    if (dataPag) setState(dataPag);
  }, [dataPag]);

  const updateAnswer = (dto: CorrectAnswers, value: number, increment: boolean) => {
    setState((state) => {
      const newState = { ...state };
      const answerById = state.users_answers.find(
        (item) => item.id === dto.user_answerId
      );

      if (answerById) {
        answerById.value = value;
        answerById.answers = answerById.answers.map((item) => {
          const findUpdate = dto.answers.find((i) => i.id === item.id);
          if (findUpdate) {
            item.isCorrect = findUpdate.isCorrect;
          }
          return item;
        });
      }

      if (increment) {
        newState.corrected_length = newState.corrected_length + 1;
      }
      return newState;
    });
  };

  return (
    <AnswersContext.Provider
      value={{ answersState, updateAnswer, changePage, loading, page }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export const useAnswersContext = () => useContext(AnswersContext);
