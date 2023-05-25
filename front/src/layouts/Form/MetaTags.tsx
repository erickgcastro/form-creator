import Head from 'next/head';

const MetaTags = ({ data }: { data: any }) => {
  return (
    <Head>
      <meta name='twitter:card' content='summary' />
      <meta
        property='og:url'
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/forms/${data.hash}`}
      />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.desc} />
      {/* <meta property='og:image' content='' /> */}
    </Head>
  );
};

export default MetaTags;
