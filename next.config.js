import pkg from './next-i18next.config.js';
const { i18n } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // generates /out folder for Hostinger
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    i18n,
  },
};

export default nextConfig;
