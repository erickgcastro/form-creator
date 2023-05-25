import { UsersAnswers } from './form';

export type FormAnswers = {
  id: string;
  createdBy: number;
  answers_length: number;
  questions_length: number;
  corrected_length: number;
  value: number | null;
  average: number | null;
  user: {
    name: string;
    email: string;
  };
  users_answers: UsersAnswers[];
};
