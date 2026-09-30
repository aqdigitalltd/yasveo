import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import type { ImageAssetType } from "@/types/content";

export interface IPhoto {
  image: ImageAssetType;
  /** The rendered width at each breakpoint, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes: string;
  /** Sizing for the frame, usually an aspect ratio such as "aspect-4/5". */
  className?: string;
  preload?: boolean;
  /** Curtain-lift entrance. Reserve for a few key photos. */
  reveal?: boolean;
}

export const Photo = ({ image, sizes, className = "", preload, reveal }: IPhoto) => {
  const frame = (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={preload} className="object-cover" />
    </div>
  );

  return reveal ? <Reveal>{frame}</Reveal> : frame;
};
