import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button/Button";
import { ConnectionLines } from "@/components/ConnectionLines/ConnectionLines";
import { Eyebrow } from "@/components/SectionIntro/SectionIntro";
import type { NavItemType } from "@/types/settings";

export interface IPageHero {
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** The page's one CTA, leading to its form. */
  action: NavItemType;
  /** A line of reassurance under the CTA, e.g. how little the form asks for. */
  note: string;
}

/** An audience page's opening, centred: what YASVEO does for this visitor, then the CTA. */
export const PageHero = ({ eyebrow, title, description, action, note }: IPageHero) => (
  <section className="relative isolate overflow-hidden px-gutter py-[clamp(64px,10vw,144px)]">
    <ConnectionLines />
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display-hero mt-6 max-w-[18ch]">{title}</h1>
      <p className="body-lg mt-6 max-w-xl text-charcoal">{description}</p>
      <ButtonLink href={action.href} className="mt-9">
        {action.label}
      </ButtonLink>
      <p className="mt-4 text-sm text-muted">{note}</p>
    </div>
  </section>
);
