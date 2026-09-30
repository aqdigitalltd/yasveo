"use client";

import type { ImageLoaderProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// next/image custom loader for the static export. Unsplash images are resized by Unsplash's CDN;
// local files in /public are served as they are, with the GitHub Pages base path added.
const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    return url.toString();
  }

  return src.startsWith("/") ? `${basePath}${src}` : src;
};

export default imageLoader;
