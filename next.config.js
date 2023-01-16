/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: '**.epicgames.com',
      },
      {
        protocol: 'https',
        hostname: '**.**.**',
      },
    ],
  },
};

module.exports = nextConfig;
