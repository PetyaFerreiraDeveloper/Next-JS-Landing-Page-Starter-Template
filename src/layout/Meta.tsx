import { NextSeo } from 'next-seo';
import Head from 'next/head';

type IMetaProps = {
  title: string;
  description: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`/images/favicon.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        openGraph={{
          title: props.title,
          description: props.description,
        }}
      />
    </>
  );
};

export { Meta };
