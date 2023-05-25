import { useGetFormData } from 'src/hooks';
import type { Form } from 'src/types';

import Head from 'next/head';
import FormByHash from 'src/layouts/Form';
import LoadingPage from 'src/layouts/LoadingPage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserContext } from 'src/context';

const FormPage = () => {
  const router = useRouter();
  const { user } = useUserContext({});
  const { data, loading, error } = useGetFormData<Form>();

  useEffect(() => {
    if (error) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    }
  }, [error, router, user]);

  if (loading) {
    return (
      <>
        <Head>
          <title>Form Creator - Form {data.hash}</title>
        </Head>
        <LoadingPage />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Form Creator - {data.hash}</title>
        </Head>
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Form Creator - {data.hash}</title>
      </Head>
      <FormByHash data={data} />
    </>
  );
};

export default FormPage;
