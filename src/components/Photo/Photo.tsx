import Image from "next/image";
import type { ImageAssetType } from "@/types/content";

export interface IPhoto {
  image: ImageAssetType;
  /** The rendered width at each breakpoint, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes: string;
  /** Sizing for the frame, usually an aspect ratio such as "aspect-4/5". */
  className?: string;
  preload?: boolean;
}

export const Photo = ({ image, sizes, className = "", preload }: IPhoto) => (
  <div className={`relative overflow-hidden rounded-xs bg-mist ${className}`}>
    <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={preload} className="object-cover" />
  </div>
);
