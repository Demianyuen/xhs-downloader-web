import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: false,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
