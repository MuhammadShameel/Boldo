/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    loader: "default",
  },
  assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
};
