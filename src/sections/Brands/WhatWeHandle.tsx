import { CheckList } from "@/components/CheckList/CheckList";
import { Photo } from "@/components/Photo/Photo";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { serviceScope } from "@/content/BrandsContent";
import { images } from "@/content/Images";

export const WhatWeHandle = () => (
  <Section labelledBy="what-we-handle-heading">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Photo image={images.colourBackdropShoot} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-4/3" reveal />

      <div>
        <SectionIntro
          id="what-we-handle-heading"
          eyebrow="What we look after"
          title={
            <>
              We handle the details <em>so you don&apos;t have to.</em>
            </>
          }
        />
        <CheckList items={serviceScope} className="mt-9 text-lg" />
      </div>
    </div>
  </Section>
);
