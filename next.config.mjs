/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/lacteaca-site', // Comment this out for local development
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