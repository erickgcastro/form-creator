export type CorrectAnswers = {
  user_answerId: string;
  answers: {
    id: string;
    isCorrect: boolean;
    questionId: string;
  }[];
};
