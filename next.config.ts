import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: "memory",
      });
    }
    return config;
  },
  allowedDevOrigins: ["united-present-hyena.ngrok-free.app"],
  reactStrictMode: false,
};

export default nextConfig;
