import type { ImageAssetType } from "@/types/content";

// Placeholder photography (Unsplash) until licensed or commissioned images are ready.
// To replace one, change its `src` (e.g. "/images/hero.jpg" in /public) and `alt`.

// Width, quality and format are added per request by src/utils/ImageLoader.ts.
const unsplash = (id: string): string => `https://images.unsplash.com/photo-${id}?fit=crop`;

export const images = {
  filmingOnLocation: {
    src: unsplash("1764162051377-36629e001b0f"),
    alt: "A videographer filming a creator beside a canal",
  },
  studioShoot: {
    src: unsplash("1641236210747-48bc43e4517f"),
    alt: "A photographer shooting a model in a daylight studio",
  },
  creatorFilmingAtHome: {
    src: unsplash("1758273238952-9f9521504c7d"),
    alt: "A creator sitting on the floor at home, filming herself on a camera and tripod",
  },
  productTutorial: {
    src: unsplash("1753162661178-dc4bd78b4cc5"),
    alt: "Two creators recording a product tutorial together",
  },
  creatorRecording: {
    src: unsplash("1758272421492-1efdb36a441f"),
    alt: "A creator talking to camera in her living room",
  },
  podcastHost: {
    src: unsplash("1593697909683-bccb1b9e68a4"),
    alt: "A podcast host wearing headphones, speaking into a microphone",
  },
  foodCreator: {
    src: unsplash("1758522487681-40062c2e70c0"),
    alt: "A food creator filming herself cooking in her kitchen",
  },
  fashionCreator: {
    src: unsplash("1758521540269-58fe43602d39"),
    alt: "A fashion creator showing clothes to camera",
  },
  travelShoot: {
    src: unsplash("1682695795798-1b31ea040caf"),
    alt: "A photographer capturing a traveller walking through a desert canyon",
  },
  colourBackdropShoot: {
    src: unsplash("1536293283170-b4604bbe272f"),
    alt: "A model posing against a terracotta studio backdrop",
  },
} satisfies Record<string, ImageAssetType>;
