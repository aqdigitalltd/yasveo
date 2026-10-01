import type { ReactNode } from "react";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import type { ComparisonSideType, ComparisonType } from "@/types/content";

interface IComparisonColumn {
  side: ComparisonSideType;
  /** The side we argue for: picked out in the accent. */
  isPreferred?: boolean;
}

const ComparisonColumn = ({ side, isPreferred = false }: IComparisonColumn) => (
  <div className={`border-t-2 pt-5 ${isPreferred ? "border-accent-light text-white" : "border-line-light text-white/65"}`}>
    <h3 className="heading-md">{side.heading}</h3>
    <span aria-hidden className={`mt-3 block text-lg ${isPreferred ? "text-accent-light" : ""}`}>
      ↓
    </span>
    <ul className="mt-3 flex flex-col gap-2">
      {side.traits.map((trait) => (
        <li key={trait}>{trait}</li>
      ))}
    </ul>
  </div>
);

export interface IFollowerComparison {
  id: string;
  eyebrow: string;
  title: ReactNode;
  /** The argument, in short paragraphs. */
  paragraphs: string[];
  /** The one line to remember, set in the accent. */
  statement: string;
  comparison: ComparisonType;
}

/** The dark section on each audience page: why follower count alone is a poor guide, with a simple comparison. */
export const FollowerComparison = ({ id, eyebrow, title, paragraphs, statement, comparison }: IFollowerComparison) => (
  <Section bg="ink" id={id} labelledBy={`${id}-heading`}>
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6">
        <SectionIntro id={`${id}-heading`} eyebrow={eyebrow} title={title} />
        <div className="mt-5 flex max-w-2xl flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "body-lg text-white/85" : "text-white/75"}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 lg:pt-10">
        <div className="grid grid-cols-2 gap-6 sm:gap-10">
          <ComparisonColumn side={comparison.overlooked} />
          <ComparisonColumn side={comparison.preferred} isPreferred />
        </div>
        {comparison.caption && <p className="mt-8 text-sm text-white/65">{comparison.caption}</p>}
        <p className="heading-lg mt-10 text-accent-light">{statement}</p>
      </div>
    </div>
  </Section>
);
