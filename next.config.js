/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
      domains: ['img.icons8.com'],
      remotePatterns: [
        {
          hostname: 'utfs.io'
        }
      ]
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/shop/', // Replace with your desired entry page
          permanent: true,
        },
      ];
    }
  };
  
  module.exports = nextConfig;
  