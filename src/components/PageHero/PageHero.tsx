import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button/Button";
import { Photo } from "@/components/Photo/Photo";
import { Eyebrow } from "@/components/SectionIntro/SectionIntro";
import type { ImageAssetType } from "@/types/content";
import type { NavItemType } from "@/types/settings";

export interface IPageHero {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** The page's one CTA, leading to its form. */
  action: NavItemType;
  image: ImageAssetType;
}

/** An audience page's opening: what YASVEO does for this visitor, the CTA, and the page's one photo. */
export const PageHero = ({ eyebrow, title, description, action, image }: IPageHero) => (
  <section className="px-gutter py-[clamp(40px,6vw,96px)]">
    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-hero mt-6 max-w-[16ch]">{title}</h1>
        <p className="body-lg mt-6 max-w-xl text-graphite">{description}</p>
        <ButtonLink href={action.href} className="mt-9">
          {action.label}
        </ButtonLink>
      </div>

      <Photo
        image={image}
        sizes="(min-width: 1024px) 36vw, 100vw"
        className="aspect-3/2 lg:col-span-5 lg:aspect-4/5"
        preload
      />
    </div>
  </section>
);
