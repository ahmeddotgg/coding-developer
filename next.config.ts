import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { turbopackMemoryLimit: 1024 },
  reactStrictMode: false,
  compiler: { removeConsole: true },
};

export default nextConfig;
