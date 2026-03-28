import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/reports/:path*",
        destination:
          "https://d3nyv7ym5iffhf.cloudfront.net/reports/:path*",
      },
    ];
  },
};

export default nextConfig;
