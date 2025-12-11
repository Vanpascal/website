import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep your server actions limit
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },

  // Enable Turbopack properly
  turbopack: {},

  // Keep your build directory settings
  distDir: ".next",
  cleanDistDir: true,
};

export default nextConfig;
