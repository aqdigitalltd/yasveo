import type { ReactNode } from "react";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import type { PointType } from "@/types/content";
import { toRoman } from "@/utils/Utils";

export interface IHowItWorks {
  title: ReactNode;
  description?: string;
  steps: PointType[];
  /** Usually a ButtonLink to the page's form. */
  action?: ReactNode;
}

/** Three plain steps. The same pattern on every page, so the process always reads the same way. */
export const HowItWorks = ({ title, description, steps, action }: IHowItWorks) => (
  <Section bg="mist" id="how-it-works" labelledBy="how-it-works-heading">
    <SectionIntro id="how-it-works-heading" eyebrow="How it works" title={title} description={description} />

    <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
      {steps.map((step, index) => (
        <li key={step.title} className="relative border-t border-ink pt-6 before:absolute before:top-[-1px] before:left-0 before:h-0.5 before:w-10 before:bg-accent">
          <span className="font-serif text-3xl leading-none italic">{toRoman(index)}</span>
          <h3 className="heading-lg mt-5">{step.title}</h3>
          <p className="mt-3 max-w-[36ch] text-graphite">{step.description}</p>
        </li>
      ))}
    </ol>

    {action && <div className="mt-14">{action}</div>}
  </Section>
);
