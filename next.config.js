/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "cdn.jsdelivr.net",
      "emojipedia-us.s3.amazonaws.com",
      "api.producthunt.com",
    ],
  },
};

module.exports = nextConfig;
