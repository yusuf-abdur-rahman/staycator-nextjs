/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com','www.w3.org'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
