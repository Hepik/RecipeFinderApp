import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
        pathname: "/static/**",
      },
    ],
  },
};

export default nextConfig;
