"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        },
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
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
exports.default = nextConfig;
