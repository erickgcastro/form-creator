import { AxiosApi } from 'src/services';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useGetFormData<T>(answers = false) {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T>({} as T);

  useEffect(() => {
    if (query.slug) {
      (async () => {
        try {
          const path = answers ? '/answers' : '?questions=true';
          const { data } = await AxiosApi().get(`forms/${query.slug}${path}`);
          setData(data);
          setLoading(false);
        } catch (error) {
          setError('Something went wrong');
          setLoading(false);
        }
      })();
    }
  }, [answers, query.slug]);

  return {
    loading,
    data,
    error,
  };
}
