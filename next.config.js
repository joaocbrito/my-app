/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
  },
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
