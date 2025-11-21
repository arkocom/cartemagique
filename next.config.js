/** @type {import('next').NextConfig} */
const nextConfig = {
  // On force le transpilage pour éviter les erreurs de modules
  transpilePackages: ['react-konva', 'konva'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
    ],
  },
  
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // SOLUTION ANTI-CRASH POUR VERCEL
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    config.resolve.alias = { ...config.resolve.alias, canvas: false };
    return config;
  },
}

module.exports = nextConfig