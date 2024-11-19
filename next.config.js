/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  // Assicuriamoci che tutte le route siano gestite correttamente
  async redirects() {
    return [
      {
        source: '/collezioni/nuovi-arrivi',
        destination: '/collezioni',
        permanent: false,
      },
      {
        source: '/collezioni/bracciali',
        destination: '/collezioni',
        permanent: false,
      },
      {
        source: '/journal',
        destination: '/',
        permanent: false,
      },
      {
        source: '/magazine',
        destination: '/',
        permanent: false,
      },
      {
        source: '/assistenza/:path*',
        destination: '/privacy-policy',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
