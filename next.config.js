/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig