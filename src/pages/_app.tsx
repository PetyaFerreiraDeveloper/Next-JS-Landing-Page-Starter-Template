import { AppProps } from 'next/app';

import Layout from '../layout/Layout';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout className="flex flex-col relative min-h-screen bg-blue-300">
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
