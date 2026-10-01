import type { ReactNode } from "react";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import type { FaqItemType } from "@/types/content";
import { serialiseJsonLd } from "@/utils/Utils";
import { FaqItem } from "./FaqItem";

export interface IFaq {
  title: ReactNode;
  items: FaqItemType[];
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

/** A short list of real questions that slide open, with FAQPage structured data. Answers are in the HTML whether open or not. */
export const Faq = ({ title, items }: IFaq) => (
  <Section id="faq" labelledBy="faq-heading">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(toFaqJsonLd(items)) }} />

    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <SectionIntro id="faq-heading" eyebrow="Questions" title={title} className="lg:col-span-5" />

      <div className="border-b border-line-strong lg:col-span-7">
        {items.map((item) => (
          <FaqItem key={item.question} item={item} />
        ))}
      </div>
    </div>
  </Section>
);
