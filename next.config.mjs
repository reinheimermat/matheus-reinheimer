/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['github-automated-repos'],
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'github.com',
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: true,
  },
}

export default nextConfig
