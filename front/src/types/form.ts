export type Form = {
  id: string;
  userBlocked: boolean;
  createdAt: string;
  updateAt: string;
  title: string;
  desc?: string;
  createdBy: number;
  date?: string;
  hash: string;
  average: number | null;
  answers_length: number;
  questions_length: number;
  value: number;
  questions?: Question[];
  users_answers?: UsersAnswers[];
};

export type Question = {
  id: string;
  formId: string;
  type: string;
  title: string;
  inputs: string[];
  value: number;
};

export type UsersAnswers = {
  id: string;
  createdAt: string;
  updateAt: string;
  createdBy: number;
  formId: string;
  value: number | null;
  answers: Answers[];
  author: {
    image: string;
    name: string;
    email: string;
  };
};

export type Answers = {
  id: string;
  createdAt: string;
  user_answerId: string;
  questionId: string;
  content: string;
  isCorrect: boolean | null;
  question: {
    title: string;
    type: string;
  };
};
