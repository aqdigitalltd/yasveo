import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button/Button";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import type { FaqItemType } from "@/types/content";
import type { NavItemType } from "@/types/settings";
import { serialiseJsonLd } from "@/utils/Utils";

export interface IFaq {
  title: ReactNode;
  items: FaqItemType[];
  /** The page's CTA, repeated as the last thing on the page. */
  action: NavItemType;
}

const toFaqJsonLd = (items: FaqItemType[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

/** A short list of real questions, with FAQPage structured data. Answers are in the HTML whether open or not. */
export const Faq = ({ title, items, action }: IFaq) => (
  <Section id="faq" labelledBy="faq-heading">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(toFaqJsonLd(items)) }} />

    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionIntro id="faq-heading" eyebrow="Questions" title={title} />
        <ButtonLink href={action.href} className="mt-9">
          {action.label}
        </ButtonLink>
      </div>

      <div className="border-b border-line-strong lg:col-span-7">
        {items.map((item) => (
          <details key={item.question} className="group border-t border-line-strong">
            <summary className="heading-md flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden
                className="text-xl leading-none text-accent transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>
            <p className="max-w-[60ch] pb-6 text-graphite">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </Section>
);
