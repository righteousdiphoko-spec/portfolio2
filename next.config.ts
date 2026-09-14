import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio2/' : '',
  trailingSlash: true,
};

export default nextConfig;
