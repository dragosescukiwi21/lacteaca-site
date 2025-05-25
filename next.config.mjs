/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lacteaca-site',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
