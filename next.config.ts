import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export',
  basePath: '/nekopress',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
