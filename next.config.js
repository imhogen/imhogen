/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,

    esmExternals: false,
  },
};

module.exports = nextConfig;
