/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.smartpath.id",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
