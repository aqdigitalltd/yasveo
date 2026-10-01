import type { ReactNode } from "react";
import { ConnectionLines, type ConnectionLinesVariant } from "@/components/ConnectionLines/ConnectionLines";

/** bone: default. paper: warm alternate. soft: pale accent tint, for the form. ink: the dark brand moment. */
export type SectionBgVariant = "bone" | "paper" | "soft" | "ink";

const bgClassNames: Record<SectionBgVariant, string> = {
  bone: "bg-bone text-ink",
  paper: "bg-paper text-ink",
  soft: "bg-accent-soft text-ink",
  ink: "bg-ink text-white",
};

export interface ISection {
  children: ReactNode;
  bg?: SectionBgVariant;
  /** Faint background line work. For a light section that needs some depth; use sparingly. */
  lines?: ConnectionLinesVariant;
  id?: string;
  labelledBy?: string;
  className?: string;
}

export const Section = ({ children, bg = "bone", lines, id, labelledBy, className = "" }: ISection) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    data-tone={bg === "ink" ? "ink" : undefined}
    className={`px-gutter py-section ${bgClassNames[bg]} ${lines ? "relative isolate overflow-hidden" : ""} ${className}`}
  >
    {lines && <ConnectionLines variant={lines} />}
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);
