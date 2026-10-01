import type { ImageAssetType } from "@/types/content";

// Placeholder photography (Unsplash) until licensed or commissioned images are ready.
// To replace one, change its `src` (e.g. "/images/hero.jpg" in /public) and `alt`.
// Photography is deliberately scarce: one image per audience page, none on the home page.

// Width, quality and format are added per request by src/utils/ImageLoader.ts.
const unsplash = (id: string): string => `https://images.unsplash.com/photo-${id}?fit=crop`;

export const images = {
  productTutorial: {
    src: unsplash("1753162661178-dc4bd78b4cc5"),
    alt: "Two creators recording a product tutorial together",
  },
  creatorFilmingAtHome: {
    src: unsplash("1758273238952-9f9521504c7d"),
    alt: "A creator sitting on the floor at home, filming herself on a camera and tripod",
  },
} satisfies Record<string, ImageAssetType>;
