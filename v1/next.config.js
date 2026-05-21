/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tws/v1',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
