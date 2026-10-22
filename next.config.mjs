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
    // Old /localitati/<slug> pages were removed (commit d0bc83d). Send the ones
    // that now have a dedicated local page there, the rest to the hub.
    const localPageRedirects = [
      "constanta", "navodari", "eforie", "mangalia",
      "limanu", "ovidiu", "23-august", "agigea",
    ].map((slug) => ({
      source: `/localitati/${slug}`,
      destination: `/cadastru-${slug}`,
      permanent: true,
    }));

    return [
      ...localPageRedirects,
      {
        source: "/localitati/:slug",
        destination: "/localitati",
        permanent: true,
      },
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
