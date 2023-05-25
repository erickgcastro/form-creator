import { useState } from 'react';
import { format } from 'date-fns';
import { useFormCreator } from 'src/context';
import * as S from '../../styles';

const DeliveryTime = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { data, setData } = useFormCreator();

  if (!toggle) {
    return <S.Button onClick={() => setToggle(true)}>Add delivery time</S.Button>;
  }

  return (
    <S.DivAlignedCenter style={{ margin: 1 }}>
      <div>
        <S.Text style={{ marginRight: 5 }}>Deadline </S.Text>
        <S.OptionalInput
          type='date'
          min={format(new Date(), 'yyyy-MM-dd')}
          value={data.date || ''}
          onChange={(e) =>
            setData((state) => ({
              ...state,
              date: e.target.value || null,
            }))
          }
        />
      </div>
      <S.BtnCloseOption onClick={() => setToggle(false)}>
        <span
          className='material-icons'
          translate='no'
          onClick={() => {
            setToggle(false);
            setData((state) => ({ ...state, date: null }));
          }}
        >
          close
        </span>
      </S.BtnCloseOption>
    </S.DivAlignedCenter>
  );
};

export default DeliveryTime;
