/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tws/v3',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
