/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty.js',
      },
    },
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;