import Head from 'next/head';
import { useUserContext } from 'src/context';

import DashboardForms from 'src/layouts/Dashboard/Forms';
import LoadingPage from 'src/layouts/LoadingPage';

const DashboardPage = () => {
  const { userLoading } = useUserContext({ secret: true });

  if (userLoading) {
    return (
      <>
        <Head>
          <title>Form Creator - Dashboard</title>
        </Head>
        <LoadingPage />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Form Creator - Dashboard</title>
      </Head>
      <DashboardForms />
    </>
  );
};

export default DashboardPage;
