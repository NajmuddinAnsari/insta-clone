/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['1000logos.net', 'www.computerhope.com', 'images.pexels.com']
  }
}

module.exports = nextConfig
