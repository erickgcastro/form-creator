import * as S from './styles';

type Props = {
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, setPage }: Props) => {
  return (
    <S.Area>
      <S.Button onClick={() => setPage(page - 1)}>
        <S.Arrow className='material-icons' rotate={true} translate='no'>
          arrow_forward_ios
        </S.Arrow>
      </S.Button>
      <S.Number>{page}</S.Number>
      <S.Button onClick={() => setPage(page + 1)}>
        <S.Arrow className='material-icons' translate='no'>
          arrow_forward_ios
        </S.Arrow>
      </S.Button>
    </S.Area>
  );
};

export default Pagination;
