import Image from 'next/image';
import * as S from './styles';

const About = ({ showModal }: { showModal: (s: any) => void }) => {
  return (
    <S.Container id='about'>
      <S.Content>
        <S.Image>
          <Image src='/form.svg' alt='' objectFit='cover' width={410} height={420} />
        </S.Image>
        <S.TextArea>
          <h2 style={{ marginBottom: 35 }}>About us</h2>
          <S.Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum, optio
            atque, earum consequuntur nemo eos dolorem voluptate veniam et adipisci minus
            similique eveniet delectus aliquam beatae vitae quos totam itaque ad!
            Asperiores assumenda deserunt ipsam facilis laboriosam nostrum enim.
          </S.Desc>
          <S.BtnAuth onClick={showModal}>Get started</S.BtnAuth>
        </S.TextArea>
      </S.Content>
    </S.Container>
  );
};

export default About;
