import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.prod.website-files.com",
      "res.cloudinary.com",
      "www.upwork.com",
    ],
  },
};

export default nextConfig;
