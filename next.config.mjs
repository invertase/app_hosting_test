/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
