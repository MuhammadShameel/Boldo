/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateStaticPath() {
    return {
      "/": { paths: paths || [], fallback: false }, // Add any additional routes you want to export
    };
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  // Other Next.js configurations
};

module.exports = nextConfig;
