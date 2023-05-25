import Head from 'next/head';
import Home from 'src/layouts/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name='twitter:card' content='summary' />
        <meta property='og:url' content={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='Form Creator - Create your forms quickly and easily'
        />
        <meta
          property='og:description'
          content='The Form Creator was made with the aim of making life easier for people who need to create a form for a survey or questionnaires.'
        />
        {/* <meta property='og:image' content='' /> */}
        <title>Form Creator</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
