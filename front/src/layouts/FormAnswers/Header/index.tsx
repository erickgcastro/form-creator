import Image from 'next/image';
import * as S from './styles';

type Props = {
  answersLen: number;
  correctedLen: number;
};
const AnswersHeader = ({ answersLen, correctedLen }: Props) => {
  return (
    <S.Header>
      <S.Icon>
        <Image
          src='/message.png'
          title='Quantidade de respostas'
          alt='message icon'
          width='23px'
          height='23px'
        />
        <span>{answersLen}</span>
      </S.Icon>
      <S.Icon>
        <Image
          src='/answers.png'
          title='Quantidade de respostas corrigidas'
          alt='answer icon'
          width='23px'
          height='23px'
        />
        <span>{correctedLen}</span>
      </S.Icon>
    </S.Header>
  );
};

export default AnswersHeader;
