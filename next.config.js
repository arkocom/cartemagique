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
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  }
};

module.exports = nextConfig;