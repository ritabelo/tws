/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tws/v2',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
