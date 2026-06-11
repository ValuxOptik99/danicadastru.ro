/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/servicii/cadastru-intabulare",
        destination: "/servicii/proprietari",
        permanent: true,
      },
      {
        source: "/servicii/topografie-ingineresca",
        destination: "/servicii/construire-casa",
        permanent: true,
      },
      {
        source: "/servicii/scanare-laser-3d",
        destination: "/servicii/dezvoltatori",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
