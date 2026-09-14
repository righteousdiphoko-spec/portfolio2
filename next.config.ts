import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio2' : '',
  assetPrefix: process.env.GITHUB_ACTIONS === 'true' ? '/portfolio2/' : '',
  trailingSlash: true,
};

export default nextConfig;
