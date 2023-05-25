import { memo } from 'react';
import { autoResize } from 'src/services';

import type { QuestionProps } from 'src/types';
import { InputText, FormCard } from 'src/components/Form';

const TypeText = ({ question, setFormBody }: QuestionProps) => {
  const changeValue = (value: string) => {
    setFormBody(value, question.id);
  };

  return (
    <FormCard>
      <p style={{ marginBottom: '30px' }}>{question.title}</p>
      <InputText
        placeholder='Responder'
        onChange={(e) => {
          changeValue(e.target.value);
          autoResize(e);
        }}
      />
    </FormCard>
  );
};

export default memo(TypeText);
