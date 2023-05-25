import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AxiosApi, ThrowToastError } from 'src/services/index';
import toast from 'react-hot-toast';
import type { CreatorForm } from 'src/types';

type TypesFormCreator = {
  data: CreatorForm;
  loading: boolean;
  response: { formId: string; hash: string } | undefined;
  handleSubmit: () => void;
  setData: Dispatch<SetStateAction<CreatorForm>>;
  addQuestion: () => number;
  deleteQuestion: (id: number) => void;
  addRadioOption: (questionId: number) => void;
  getRadioOption: (questionId: number, id: number) => { id: number; content: string };
  deleteRadioOption: (questionId: number, id: number) => void;
  updateRadioOption: (content: string, questionId: number, id: number) => void;
  // prettier-ignore
  updateQuestion: ( e: any, questionId: number, field: 'title' | 'type' | 'value', defaultValue: any ) => void;
};

export const FormCreatorContext = createContext({} as TypesFormCreator);

const init = {
  title: 'Untitled form',
  desc: 'Form description',
  date: null,
  average: null,
  questions: [],
};

export const FormCreatorProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CreatorForm>(init);
  const [response, setResponse] = useState<{ formId: string; hash: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const questions = data.questions.map((item) => {
        const inputs = item.inputs.map(({ content }) => content);
        return { ...item, inputs };
      });
      const checkIfQuestionHasType = data.questions.some((item) => !item.type);
      if (checkIfQuestionHasType) {
        toast.error('All questions must have a type');
        setLoading(false);
        return;
      }
      const { data: body } = await AxiosApi().post('forms', { ...data, questions });
      setResponse(body);
      toast.success('The form has been created');
    } catch (error: any) {
      console.log(error);
      ThrowToastError(error);
    }
    setLoading(false);
  };

  const addQuestion = () => {
    setData((state) => {
      const newQuestion = {
        id,
        type: null,
        title: 'Untitled question',
        inputs: [],
        value: null,
      };
      return {
        ...state,
        questions: [...state.questions, newQuestion],
      };
    });
    setId((id) => id + 1);
    return id - 1;
  };

  const deleteQuestion = (id: number) => {
    setData((state) => {
      const newState = { ...state };
      newState.questions = newState.questions.filter((item) => item.id !== id);
      return newState;
    });
  };

  const updateQuestion = (
    e: any,
    questionId: number,
    field: 'title' | 'type' | 'value',
    defaultValue: any
  ) => {
    setData((state) => {
      const newState = { ...state };
      const qt = newState.questions.find((item) => item.id === questionId);

      if (qt) {
        if (field === 'value') {
          qt[field] = +e.target.value || defaultValue;
        } else {
          qt[field] = e.target.value || defaultValue;
        }
      }

      if (field === 'type' && e.target.value === 'select') {
        if (qt?.inputs?.length === 0) {
          qt!.inputs?.push({
            id: 0,
            content: 'Option',
          });
        }
      }

      if (field === 'type' && e.target.value !== 'select') {
        // vai limpar as opções do tipo select
        qt!.inputs = [];
      }

      return newState;
    });
  };

  const addRadioOption = (questionId: number) => {
    setData((state) => {
      const newState = { ...state };
      const question = newState.questions.find((item) => item.id === questionId);
      const id = new Date().getTime();
      if (question) {
        question.inputs.push({
          id,
          content: 'Option',
        });
      }
      return newState;
    });
  };

  const getRadioOption = (questionId: number, id: number) => {
    const question = data.questions.find((item) => item.id === questionId);
    const option = question!.inputs?.find((item) => item.id === id);
    if (!option) {
      throw new Error(`Radio option with id ${questionId} not found in question ${id}`);
    }
    return option;
  };

  const updateRadioOption = (content: string, questionId: number, id: number) => {
    setData((state) => {
      const newState = { ...state };
      const question = newState.questions.find((item) => item.id === questionId);
      const option = question!.inputs?.find((item) => item.id === id);
      if (!option) {
        throw new Error(`Radio option with id ${questionId} not found in question ${id}`);
      }
      option.content = content;
      return newState;
    });
  };

  const deleteRadioOption = (questionId: number, id: number) => {
    setData((state) => {
      const newState = { ...state };
      const question = newState.questions.find((item) => item.id === questionId);
      if (question && question.inputs.length !== 1) {
        question.inputs = question.inputs.filter((item) => item.id !== id);
      }
      return newState;
    });
  };

  return (
    <FormCreatorContext.Provider
      value={{
        data,
        loading,
        response,
        handleSubmit,
        setData,
        addQuestion,
        deleteQuestion,
        updateQuestion,
        getRadioOption,
        updateRadioOption,
        addRadioOption,
        deleteRadioOption,
      }}
    >
      {children}
    </FormCreatorContext.Provider>
  );
};

export const useFormCreator = () => useContext(FormCreatorContext);
