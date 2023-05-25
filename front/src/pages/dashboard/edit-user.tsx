import Head from 'next/head';
import { useUserContext } from 'src/context';

import EditUser from 'src/layouts/Dashboard/EditUser';
import LoadingPage from 'src/layouts/LoadingPage';

const EditUserPage = () => {
  const { userLoading } = useUserContext({ secret: true });

  if (userLoading){

    return (
      <>
        <Head>
          <title>Form Creator - Edit user</title>
        </Head>
        <LoadingPage />
      </>
    );
  }
  
  return (
    <>
      <Head>
        <title>Form Creator - Edit user</title>
      </Head>
      <EditUser />
    </>
  );
};

export default EditUserPage;
