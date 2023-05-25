import { useState } from 'react';
import { useFormCreator } from 'src/context';
import * as S from '../../styles';

const AddAverage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { data, setData } = useFormCreator();

  if (!toggle) {
    return <S.Button onClick={() => setToggle(true)}>Add Average</S.Button>;
  }

  return (
    <S.DivAlignedCenter>
      <div>
        <S.Text>Average</S.Text>
        <S.OptionalInput
          value={data.average || ''}
          onChange={(e) =>
            setData((state) => ({
              ...state,
              average: +e.target.value || null,
            }))
          }
          type='number'
          min='0'
          style={{ width: '70px', textAlign: 'center' }}
        />
      </div>
      <S.BtnCloseOption
        onClick={() => {
          setToggle(false);
          setData((state) => ({ ...state, average: null }));
        }}
      >
        <span className='material-icons' translate='no'>
          close
        </span>
      </S.BtnCloseOption>
    </S.DivAlignedCenter>
  );
};

export default AddAverage;
