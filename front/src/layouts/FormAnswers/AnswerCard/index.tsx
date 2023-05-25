import { useState, memo } from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { UsersAnswers } from 'src/types';

import { FormCard } from 'src/components/Form';
import AnswersModal from 'src/components/AnswersModal';
import * as S from './syles';
import Image from 'next/image';

type AnswerProps = {
  data: UsersAnswers;
  average: number | null;
};

const AnswerCard = ({ data, average }: AnswerProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toogleModal = () => {
    setModalOpen((state) => !state);
  };

  return (
    <>
      {modalOpen && <AnswersModal data={data} closeModal={toogleModal} />}

      <FormCard>
        <S.InfoArea>
          <div style={{ display: 'flex', gap: '10px' }}>
            <S.UserImage>
              <Image
                src={data.author.image || '/user.png'}
                layout='fill'
                objectFit='cover'
                objectPosition='bottom'
                alt='user image'
                height={60}
                width={60}
                quality={100}
              />
            </S.UserImage>
            <S.Info>
              <S.Text primary>{data.author.name}</S.Text>
              <S.Text>{data.author.email}</S.Text>
            </S.Info>
          </div>
          <S.Info align='end'>
            {average &&
              (data.value === null ? (
                <S.Text style={{ fontStyle: 'italic' }}>Waiting for the review</S.Text>
              ) : (
                <S.Text
                  style={{
                    fontStyle: 'italic',
                    color: data.value >= Number(average) ? 'green' : 'red',
                  }}
                >
                  Value {data.value}
                </S.Text>
              ))}
            <S.Text style={{ fontStyle: 'italic' }}>
              {formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}
            </S.Text>
          </S.Info>
        </S.InfoArea>
        <S.Button onClick={toogleModal}>See answers</S.Button>
      </FormCard>
    </>
  );
};

export default memo(AnswerCard);
