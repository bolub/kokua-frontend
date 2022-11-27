/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net', 'emojipedia-us.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
