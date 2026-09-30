import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button/Button";
import { CheckList } from "@/components/CheckList/CheckList";
import { Photo } from "@/components/Photo/Photo";
import { Section } from "@/components/Section/Section";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { brandBenefits, creatorBenefits } from "@/content/HomeContent";
import { images } from "@/content/Images";
import type { ImageAssetType } from "@/types/content";

export type RouteCardVariant = "brand" | "creator";

const cardClassNames: Record<RouteCardVariant, string> = {
  brand: "bg-mist text-ink",
  creator: "bg-ink text-white",
};

interface IRouteCard {
  variant: RouteCardVariant;
  eyebrow: string;
  title: ReactNode;
  benefits: string[];
  image: ImageAssetType;
  action: { href: string; label: string };
}

const RouteCard = ({ variant, eyebrow, title, benefits, image, action }: IRouteCard) => (
  <article
    data-tone={variant === "creator" ? "ink" : undefined}
    className={`flex flex-col ${cardClassNames[variant]}`}
  >
    <Photo image={image} sizes="(min-width: 768px) 45vw, 100vw" className="aspect-3/2" reveal />
    <div className="flex flex-1 flex-col p-7 sm:p-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="heading-lg mt-4 max-w-[20ch]">{title}</h3>
      <CheckList items={benefits} className="mt-7 mb-10" />
      <ButtonLink href={action.href} className="mt-auto self-start">
        {action.label}
      </ButtonLink>
    </div>
  </article>
);

export const Audiences = () => (
  <Section labelledBy="audiences-heading">
    <SectionIntro
      id="audiences-heading"
      eyebrow="Who we work with"
      title={
        <>
          Brand or creator? <em>Start here.</em>
        </>
      }
    />

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <RouteCard
        variant="brand"
        eyebrow="For brands"
        title="Find creators who fit your brand and your audience."
        benefits={brandBenefits}
        image={images.productTutorial}
        action={{ href: "/brands", label: "For brands" }}
      />
      <RouteCard
        variant="creator"
        eyebrow="For creators"
        title="Find opportunities that make sense for your content and community."
        benefits={creatorBenefits}
        image={images.creatorRecording}
        action={{ href: "/creators", label: "For creators" }}
      />
    </div>
  </Section>
);
