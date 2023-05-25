export type CreatorForm = {
  title: string;
  desc: string | null;
  date: string | null;
  average: number | null;
  questions: CreatorQuestion[];
};

export type CreatorQuestion = {
  id: number;
  type: string | null;
  title: string;
  inputs: {
    id: number;
    content: string;
  }[];
  value: number | null;
};
