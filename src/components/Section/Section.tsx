import type { ReactNode } from "react";

/** white: default. mist: light grey alternate. wash: pale accent, for the form. ink: the dark brand moment. */
export type SectionBgVariant = "white" | "mist" | "wash" | "ink";

const bgClassNames: Record<SectionBgVariant, string> = {
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  wash: "bg-accent-wash text-ink",
  ink: "bg-ink text-white",
};

export interface ISection {
  children: ReactNode;
  bg?: SectionBgVariant;
  id?: string;
  labelledBy?: string;
  className?: string;
}

export const Section = ({ children, bg = "white", id, labelledBy, className = "" }: ISection) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    data-tone={bg === "ink" ? "ink" : undefined}
    className={`px-gutter py-section ${bgClassNames[bg]} ${className}`}
  >
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);
