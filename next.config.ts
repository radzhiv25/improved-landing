import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1zk2x7mtoyb2b.cloudfront.net",
        pathname: "/websiteAssets/**",
      },
    ],
  },
};

export default nextConfig;
