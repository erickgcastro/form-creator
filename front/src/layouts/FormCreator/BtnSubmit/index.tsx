import { useFormCreator } from 'src/context';
import * as S from './styles';

const BtnSubmit = () => {
  const { handleSubmit } = useFormCreator();

  return <S.BtnSubmit onClick={handleSubmit}>Submit</S.BtnSubmit>;
};

export default BtnSubmit;
