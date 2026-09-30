import type { NextConfig } from "next";

// Static export for GitHub Pages. On a project site the app lives under /<repo-name>, so the
// deploy workflow sets NEXT_PUBLIC_BASE_PATH (leave it empty for a custom domain or local dev).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // No image server on a static host: Unsplash resizes via URL parameters (see ImageLoader.ts).
    loader: "custom",
    loaderFile: "./src/utils/ImageLoader.ts",
  },
};

export default nextConfig;
