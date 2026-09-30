import { images } from "@/content/Images";
import type { ImageAssetType, PointType } from "@/types/content";

export type CreatorQualityType = PointType & {
  /** The kind of creator pictured, shown as the post's author line. */
  niche: string;
  format: string;
  image: ImageAssetType;
};

export const creatorQualities: CreatorQualityType[] = [
  {
    title: "A clear point of view",
    description: "You know what your content is about, and your audience knows why they follow you.",
    niche: "Food",
    format: "Video",
    image: images.foodCreator,
  },
  {
    title: "An audience that trusts you",
    description: "Genuine, engaged relationships matter more to us than the size of your following.",
    niche: "Fashion",
    format: "Try-on",
    image: images.fashionCreator,
  },
  {
    title: "Care in what you make",
    description: "Considered work, whatever the format, platform or niche.",
    niche: "Travel",
    format: "Photo",
    image: images.travelShoot,
  },
  {
    title: "Honesty with your audience",
    description: "Partnerships disclosed clearly, and only for things you'd genuinely stand behind.",
    niche: "Podcast",
    format: "Audio",
    image: images.podcastHost,
  },
];

export const creatorSteps: PointType[] = [
  {
    title: "Tell us about you",
    description: "Share what you create, where you post and who your content is for. It takes a few minutes.",
  },
  {
    title: "We get to know your work",
    description: "If there could be a fit, we'll arrange a chat to understand your niche and your audience properly.",
  },
  {
    title: "Hear about the right briefs",
    description: "When a brand opportunity suits you, we bring it to you with the reasoning behind it. You decide.",
  },
];

export const creatorPromises = [
  "Opportunities chosen for how well they fit your content",
  "Briefs that leave room for your voice",
  "The fee, usage and timelines agreed before you commit",
  "Someone to talk to throughout a partnership",
  "Saying no is always fine",
];

export const applicationNextSteps = [
  "We look at every application properly.",
  "If there's a potential fit, we'll arrange a chat.",
  "We'll get in touch when a relevant opportunity comes up.",
];
