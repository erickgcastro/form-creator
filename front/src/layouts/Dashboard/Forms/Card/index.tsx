import { useState } from 'react';
import { format } from 'date-fns';
import type { Form } from 'src/types';

import ModalFormCard from './Modal';
import * as S from './styles';

type Props = {
  data: Form;
  removeItemById: (id: string) => void;
};

const Card = ({ data, removeItemById }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Card>
      <S.TextCard>
        {data.title.substring(0, 135)}
        {data.title.length > 135 && '...'}
      </S.TextCard>

      <S.InfoArea>
        <S.Info>
          <S.TextBlur>Created At</S.TextBlur>
          <span>{format(new Date(data.createdAt), 'yyyy/MM/dd')}</span>
        </S.Info>
        <S.Info>
          <S.TextBlur>Answers</S.TextBlur>
          <span>{data.answers_length}</span>
        </S.Info>
      </S.InfoArea>

      <div style={{ display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
        <S.LinkToForm href={`/forms/${data.hash}`}>See form</S.LinkToForm>

        <S.ThreeDots onClick={() => setShowModal(true)}>
          <span className='material-icons' translate='no'>
            more_vert
          </span>
        </S.ThreeDots>
        {showModal && (
          <ModalFormCard
            data={data}
            closeModal={setShowModal}
            removeItemById={removeItemById}
          />
        )}
      </div>
    </S.Card>
  );
};

export default Card;
