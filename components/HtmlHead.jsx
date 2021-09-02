import PropTypes from 'prop-types';
import Head from 'next/head';

function HtmlHead({ pageTitle, description }) {
  const siteTitle = 'kinsei';

  return (
    <Head>
      <title>
        {siteTitle} | {pageTitle}
      </title>

      <meta property="og:title" content={pageTitle} key="title" />
      <meta
        property="og:description"
        content={`${siteTitle} | ${pageTitle}`}
        key="og:description"
      />
      <meta
        name="twitter:title"
        content={`${siteTitle} | ${pageTitle}`}
        key="twitter:title"
      />
      <meta
        name="twitter:description"
        content={`${siteTitle} - ${description}`}
        key="twitter:description"
      />
    </Head>
  );
}

HtmlHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HtmlHead;
