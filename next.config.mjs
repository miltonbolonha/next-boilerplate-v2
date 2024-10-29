/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: false,
  // output: "export",
  trailingSlash: true,
  swcMinify: true,
  assetPrefix: isProd ? process.env.WEBSITE_URL : "",
  images: {
    deviceSizes: [350, 480, 640, 768, 960, 1250, 2048],
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
    formats: ["image/webp"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
