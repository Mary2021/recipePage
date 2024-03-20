/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/recipePage",
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        //pathname: '/images/category/**',
      },
    ],
  },
};

module.exports = nextConfig;
