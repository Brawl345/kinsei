const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  eslint: {
    // Warning: Only enable this if you do linting through CI before pushing to production!
    ignoreDuringBuilds: true,
  },
};

module.exports = withBundleAnalyzer({});
