/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/vibe-carbon-solution",
  assetPrefix: "/vibe-carbon-solution/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tildacdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
