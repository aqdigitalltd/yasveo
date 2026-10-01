import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button/Button";
import type { ConnectionLinesVariant } from "@/components/ConnectionLines/ConnectionLines";
import { Section, type SectionBgVariant } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import type { PointType } from "@/types/content";
import type { NavItemType } from "@/types/settings";

export interface IPointsSection {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Three short points. Keep to three: the row is the whole section. */
  points: PointType[];
  /** Numbers the points 01, 02, 03 for a process. */
  numbered?: boolean;
  bg?: SectionBgVariant;
  lines?: ConnectionLinesVariant;
  action?: NavItemType;
}

const toStepNumber = (index: number): string => String(index + 1).padStart(2, "0");

/** A heading and three plain points in a row: "what matters" and "how it works" on both audience pages. */
export const PointsSection = ({
  id,
  eyebrow,
  title,
  description,
  points,
  numbered = false,
  bg,
  lines,
  action,
}: IPointsSection) => {
  const List = numbered ? "ol" : "ul";

  return (
    <Section bg={bg} lines={lines} id={id} labelledBy={`${id}-heading`}>
      <SectionIntro id={`${id}-heading`} eyebrow={eyebrow} title={title} description={description} />

      <List className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
        {points.map((point, index) => (
          <li key={point.title} className="border-t-2 border-accent pt-6">
            {numbered && <span className="font-brand text-sm font-medium text-accent-deep">{toStepNumber(index)}</span>}
            <h3 className={`heading-lg ${numbered ? "mt-3" : ""}`}>{point.title}</h3>
            <p className="mt-4 max-w-[44ch] text-charcoal">{point.description}</p>
          </li>
        ))}
      </List>

      {action && (
        <ButtonLink href={action.href} className="mt-12">
          {action.label}
        </ButtonLink>
      )}
    </Section>
  );
};
