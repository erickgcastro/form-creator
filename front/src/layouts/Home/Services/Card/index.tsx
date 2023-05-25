import Image from 'next/image';
import * as S from './styles';

type Props = {
  title: string;
  desc: string;
  icon: string;
};

const Card = ({ title, desc, icon }: Props) => {
  return (
    <S.Container>
      <S.IconArea>
        <Image src={'/' + icon} width={50} height={50} alt='' />
      </S.IconArea>
      <S.TextArea>
        <S.Title>{title}</S.Title>
        <S.Desc>{desc}</S.Desc>
      </S.TextArea>
      <S.Border />
    </S.Container>
  );
};

export default Card;
