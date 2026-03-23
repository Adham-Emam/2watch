import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.impawards.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
