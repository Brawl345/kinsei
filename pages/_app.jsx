import '@/styles/globals.scss';

import Head from 'next/head';
import PropTypes from 'prop-types';
import { Section } from 'react-bulma-components';

function App({ Component, pageProps }) {
  const siteTitle = 'kinsei';
  const siteDescription = '金星 Feed-Aggregator';

  return (
    <>
      <Head>
        <title>kinsei</title>
        <link rel="shortcut icon" href="/favicon.png" />

        {/* OpenGraph Tags */}
        <meta property="og:site_name" content={siteTitle} key="og:site_name" />
        <meta
          property="og:description"
          content={siteDescription}
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content="/logo.png" key="og:image" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" key="twitter:card" />
        <meta name="twitter:title" content={siteTitle} key="twitter:title" />
        <meta
          name="twitter:description"
          content={siteDescription}
          key="twitter:description"
        />

        {/* Phone number detection */}
        <meta name="format-detection" content="telephone=no" />

        {/*  Android */}
        <meta name="theme-color" content="#FFF" />
      </Head>

      <Section>
        <Component {...pageProps} />
      </Section>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
