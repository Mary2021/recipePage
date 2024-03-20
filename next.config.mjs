/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
