import { autoResize } from 'src/services';
import { useFormCreator } from 'src/context';

import { InputRadio } from 'src/components/Form';
import { InputText, BtnCloseOption } from '../../styles';
import * as S from './styles';

const TypeRadio = ({ id, questionId }: { id: number; questionId: number }) => {
  const { getRadioOption, updateRadioOption, deleteRadioOption } = useFormCreator();
  const { content } = getRadioOption(questionId, id);

  return (
    <>
      <S.RadioArea>
        <InputRadio
          as='div'
          style={{
            position: 'inherit',
            cursor: 'auto',
          }}
        />
        <InputText
          css={{
            width: '100%',
            padding: '0 0 5px',
            height: '25px',
            resize: 'none',
            fontSize: '$xSmall',
            fontWeight: '400',
          }}
          value={content}
          onChange={(e) => {
            updateRadioOption(e.target.value, questionId, id);
            autoResize(e, 25);
          }}
        />
        <BtnCloseOption onClick={() => deleteRadioOption(questionId, id)}>
          <span className='material-icons' translate='no'>
            close
          </span>
        </BtnCloseOption>
      </S.RadioArea>
    </>
  );
};

export default TypeRadio;
