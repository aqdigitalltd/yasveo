import type { ReactNode } from "react";
import { Photo } from "@/components/Photo/Photo";
import { Eyebrow } from "@/components/SectionIntro/SectionIntro";
import type { ImageAssetType } from "@/types/content";

export interface IPageHero {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions: ReactNode;
  image: ImageAssetType;
  /** A smaller photo overlapping the main one, as in Concept 2. */
  insetImage: ImageAssetType;
  /** e.g. { figure: "Fig. 01", text: "The work behind the work" } */
  caption: { figure: string; text: string };
}

/** Copy and actions on the left; an overlapping editorial photo pair with a figure caption on the right. */
export const PageHero = ({ eyebrow, title, description, actions, image, insetImage, caption }: IPageHero) => (
  <section className="overflow-hidden px-gutter pt-[calc(var(--spacing-header)+2rem)] pb-section lg:pt-[calc(var(--spacing-header)+3.5rem)]">
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-12">
      <div className="animate-rise lg:col-span-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-hero mt-6">{title}</h1>
        <p className="body-lg mt-7 max-w-136 text-graphite">{description}</p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">{actions}</div>
      </div>

      <figure className="lg:col-span-6 lg:pl-14">
        <div className="relative ml-[12%] lg:ml-0">
          <Photo
            image={image}
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="aspect-4/5 sm:aspect-5/4 lg:aspect-4/5"
            preload
            reveal
          />
          <div className="absolute -bottom-10 left-[-14%] w-[38%] border-[6px] border-white lg:-left-14">
            <Photo image={insetImage} sizes="(min-width: 1024px) 16vw, 36vw" className="aspect-3/4" reveal />
          </div>
        </div>
        <figcaption className="eyebrow mt-4 flex flex-col items-end gap-1 pl-[38%] text-right tracking-[0.14em] text-muted">
          <span className="text-ink">{caption.figure}</span>
          <span>{caption.text}</span>
        </figcaption>
      </figure>
    </div>
  </section>
);
