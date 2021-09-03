const nextConfig = {
  eslint: {
    // Warning: Only enable this if you do linting through CI before pushing to production!
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/feed',
        destination: '/api/feed',
      },
      {
        source: '/rss20.xml',
        destination: '/api/feed',
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
