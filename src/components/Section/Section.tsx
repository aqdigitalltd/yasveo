import type { ReactNode } from "react";

/** white: default. mist: light grey alternate. ink / charcoal: dark brand moments. */
export type SectionBgVariant = "white" | "mist" | "ink" | "charcoal";

const bgClassNames: Record<SectionBgVariant, string> = {
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  ink: "bg-ink text-white",
  charcoal: "bg-charcoal text-white",
};

const darkBackgrounds: SectionBgVariant[] = ["ink", "charcoal"];

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
    data-tone={darkBackgrounds.includes(bg) ? "ink" : undefined}
    className={`px-gutter py-section ${bgClassNames[bg]} ${className}`}
  >
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);
