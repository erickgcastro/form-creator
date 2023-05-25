import { useState, useEffect } from 'react';
import { AxiosApi, ThrowToastError } from 'src/services';

type Props = {
  route: string;
  page?: number;
  limit?: number;
  field?: string;
  blockFirstPage?: boolean;
};

export function usePagination<T>({ route, page, limit, field, blockFirstPage }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T>();
  const [query, setQuery] = useState({
    page: page || 1,
    limit: limit || 10,
  });

  const removeItemById = (id: string) => {
    setData((state: any) => {
      if (Array.isArray(state)) {
        return state.filter((item: any) => item.id !== id);
      }
      return state;
    });
  };

  const changePage = (page?: number, limit?: number) => {
    if (page && page !== query.page) {
      setQuery((state) => ({
        ...state,
        page: page || state.page,
        limit: limit || state.limit,
      }));
    }
  };

  useEffect(() => {
    if ((!page || page === 1) && !blockFirstPage) {
      (async () => {
        setLoading(true);
        try {
          const url = `${route}?page=${query.page}&limit=${query.limit}`;
          const { data } = await AxiosApi().get(url);
          if (field) {
            setData(data[field]);
          } else {
            setData(data);
          }
        } catch (error: any) {
          console.error(error);
          setError(error.message);
          ThrowToastError(error);
        }
        setLoading(false);
      })();
    }
  }, [blockFirstPage, field, page, query, route]);

  return {
    loading,
    data,
    changePage,
    error,
    removeItemById,
    page: query.page,
  };
}
