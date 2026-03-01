/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
