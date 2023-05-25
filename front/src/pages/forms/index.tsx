import Head from 'next/head';
import { FormCreatorProvider, useUserContext } from 'src/context';

import FormCreator from 'src/layouts/FormCreator';
import LoadingPage from 'src/layouts/LoadingPage';

const CreatorPage = () => {
  const { userLoading } = useUserContext({ secret: true });

  if (userLoading) {
    return (
      <>
        <Head>
          <title>Form Creator</title>
        </Head>
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Form Creator</title>
      </Head>
      <FormCreatorProvider>
        <FormCreator />
      </FormCreatorProvider>
    </>
  );
};

export default CreatorPage;
