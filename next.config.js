/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/vibe-carbon-solution" : "",
  assetPrefix: isProd ? "/vibe-carbon-solution/" : undefined,
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
