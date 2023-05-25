import { memo } from 'react';
import { autoResize } from 'src/services';
import { useFormCreator } from 'src/context';
import type { CreatorQuestion } from 'src/types';

import { FormCard, InputText as QuestionTypeText } from 'src/components/Form';
import { BtnAddOption } from './styles';
import TypeRadio from './TypeRadio';
import * as S from '../styles';

const Question = ({ data }: { data: CreatorQuestion }) => {
  const {
    data: { average },
    updateQuestion,
    addRadioOption,
    deleteQuestion,
  } = useFormCreator();

  return (
    <FormCard>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <S.BtnCloseOption
          css={{ color: '$textColor' }}
          onClick={() => deleteQuestion(data.id)}
        >
          <span className='material-icons' translate='no'>
            close
          </span>
        </S.BtnCloseOption>
      </div>

      <S.InputText
        css={{ fontSize: '$small', color: '$textColorBlur' }}
        placeholder='This field is required'
        alert={!data.title}
        value={data.title}
        onChange={(e) => {
          updateQuestion(e, data.id, 'title', '');
          autoResize(e, 32);
        }}
      />

      <S.DivSpaceBetween style={{ margin: '10px 0 30px' }}>
        <div>
          <S.Text>Type da questao</S.Text>
          <S.OptionalInput
            as='select'
            style={{ width: 90, textAlign: 'center' }}
            onChange={(e) => updateQuestion(e, data.id, 'type', null)}
          >
            <option value=''></option>
            <option value='text'>Text</option>
            <option value='select'>Select</option>
          </S.OptionalInput>
        </div>

        {average !== null && (
          <div>
            <S.Text>Value</S.Text>
            <S.OptionalInput
              type='number'
              min='0'
              style={{ width: '70px', textAlign: 'center' }}
              value={data.value || ''}
              onChange={(e) => updateQuestion(e, data.id, 'value', null)}
            />
          </div>
        )}
      </S.DivSpaceBetween>

      {data.type === 'text' && (
        <QuestionTypeText
          css={{
            '@400': {
              height: '35px',
              minHeight: '35px',
              padding: '7px',
            },
          }}
          as='div'
        >
          Text type question
        </QuestionTypeText>
      )}

      {data.type === 'select' && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.inputs?.map((item) => (
              <TypeRadio key={item.id} id={item.id} questionId={data.id} />
            ))}
          </div>

          <BtnAddOption onClick={() => addRadioOption(data.id)}>Add option</BtnAddOption>
        </div>
      )}
    </FormCard>
  );
};

export default memo(Question);
