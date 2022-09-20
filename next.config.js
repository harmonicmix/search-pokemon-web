/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.pokemondb.net"],
  },
};

module.exports = nextConfig;
