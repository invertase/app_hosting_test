// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-central1-dev-extensions-testing.cloudfunctions.net',
        pathname: '/**',
      },
    ],
  },
};
