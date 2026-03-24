import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/321",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
