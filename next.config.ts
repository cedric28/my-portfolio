import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "iad.microlink.io" },
    ],
  },
};

export default nextConfig;
