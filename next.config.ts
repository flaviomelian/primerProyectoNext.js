import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:page',
        destination: '/general/:page',
      },
    ]
  },
};

export default nextConfig;