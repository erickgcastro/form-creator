import type { Form } from 'src/types';

import { CardContainer } from 'src/components/Form';
import Navbar from 'src/components/Navbar';
import CreatorMessage from './CreatorMessage';
import Pagination from 'src/components/Pagination';
import * as S from './styles';
import Card from './Card';
import { usePagination } from 'src/hooks';
import LoadingWithNavbar from 'src/components/LoadingWithNavbar';

const DashboardForms = ({}) => {
  const { changePage, data, error, loading, removeItemById, page } = usePagination<
    Form[]
  >({ route: '/users/forms', limit: 9, field: 'forms' });

  if (loading) return <LoadingWithNavbar />;

  if (!data?.length) {
    return (
      <>
        <CreatorMessage />
        {page !== 1 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <Navbar page='dashboard' />

      <CardContainer>
        <S.LinkToCreator href='/forms'>
          Create form
          <span className='material-icons' translate='no'>
            add
          </span>
        </S.LinkToCreator>

        <S.GridTemplate>
          {data!.map((item) => (
            <Card data={item} key={item.id} removeItemById={removeItemById} />
          ))}
        </S.GridTemplate>

        {page === 1 && data?.length === 9 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}

        {page !== 1 && (
          <div style={{ margin: '40px auto 0', width: 'max-content' }}>
            <Pagination page={page} setPage={changePage} />
          </div>
        )}
      </CardContainer>
    </>
  );
};

export default DashboardForms;
