/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: 'https://strojne-instalacije-ricl-d62lc4l9l-matevzsemprimoznik.vercel.app/api/contact',
      },
    ]
  },
}

module.exports = nextConfig
