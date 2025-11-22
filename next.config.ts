import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config: any) => {
    // Prevent Webpack from scanning system folders (Windows)
    config.watchOptions = {
      ignored: [
        "**/node_modules",
        "**/.next",
        "C:/Users/**",
        "C:/Program Files/**",
        "C:/Windows/**",
      ],
    };
    return config;
  },
  distDir: ".next",
  cleanDistDir: true,
};

export default nextConfig;
