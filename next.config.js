/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next.js à traiter ces paquets pour éviter les bugs d'import
  transpilePackages: ['react-konva', 'konva'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
    ],
  },
  
  // Pas de 'appDir' ni 'swcMinify' ici ! (Ils sont par défaut dans Next 15)
  reactStrictMode: true,
  
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // LA SOLUTION ANTI-CRASH CANVAS
  webpack: (config) => {
    // 1. On dit que canvas est externe
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    
    // 2. On force l'alias à false pour que Webpack arrête de le chercher
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    
    return config;
  },
}

module.exports = nextConfig