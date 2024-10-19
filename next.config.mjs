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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    })
    return config
  },
}

export default nextConfig
