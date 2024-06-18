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

if (process.env.MIGHTYMELD) {
  const { options } = require("@mightymeld/swc-plugin/options");
  nextConfig.experimental = {
    swcPlugins: [["@mightymeld/swc-plugin", options()]],
  };
}

module.exports = nextConfig;
