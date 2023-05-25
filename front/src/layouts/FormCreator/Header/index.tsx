import { useFormCreator } from 'src/context';
import { autoResize } from 'src/services';


import { FormCard } from 'src/components/Form';
import * as S from '../styles';
import DeliveryTime from './DeliveryTime';
import AddAverage from './AddAverage';

const HeaderForm = () => {
  const { data, setData } = useFormCreator();

  return (
    <FormCard>
      <div style={{ marginBottom: 10 }}>
        <S.InputText
          css={{ fontSize: '$big', height: '39px' }}
          placeholder='This field is required'
          alert={!data.title}
          value={data.title}
          onChange={(e) => {
            setData((state) => ({ ...state, title: e.target.value }));
            autoResize(e, 35);
          }}
        />
        <S.InputText
          css={{ fontSize: '$small', color: '$textColorBlur' }}
          value={data.desc || ''}
          onChange={(e) => {
            setData((state) => ({ ...state, desc: e.target.value }));
            autoResize(e, 32);
          }}
        />
      </div>

      <S.DivSpaceBetween>
        <AddAverage />
        <DeliveryTime />
      </S.DivSpaceBetween>
    </FormCard>
  );
};

export default HeaderForm;
