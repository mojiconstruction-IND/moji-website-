import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configured for static HTML export */
  output: 'export',
  // Optional: Disable image optimization if deploying somewhere that doesn't support Next.js Image Optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
