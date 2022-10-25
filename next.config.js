/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
  },
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "clouddlare",
    path: "",
  },
};

module.exports = nextConfig;
