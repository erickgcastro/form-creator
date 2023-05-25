import { AxiosApi, ThrowToastError } from 'src/services';
import { useRemoveBodyScroll } from 'src/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAnswersContext } from 'src/context/AnswersContext';
import toast from 'react-hot-toast';
import { CorrectAnswers } from 'src/types';

const useAnswersModal = (answerId: string) => {
  useRemoveBodyScroll();
  const { query } = useRouter();
  const { updateAnswer } = useAnswersContext();
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<CorrectAnswers>({
    user_answerId: answerId,
    answers: [],
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await AxiosApi().patch(`forms/${query.slug}/answers`, answers);
      updateAnswer(answers, data.value, data.increment);
      toast.success('Corrected answers');
    } catch (error: any) {
      ThrowToastError(error);
    }
    setLoading(false);
  };

  return {
    loading,
    handleSubmit,
    setAnswers,
  };
};

export default useAnswersModal;
