/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rb.gy",
        port: "",
        pathname: "/ulxxee",
      },
    ],
  },
};

module.exports = nextConfig;
