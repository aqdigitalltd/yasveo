import type { ReactNode } from "react";

export interface IEyebrow {
  children: ReactNode;
  /** Concept 2's hairline running to the end of the row. */
  withRule?: boolean;
  className?: string;
}

/** The section marker: a short orange rule and a tracked label. */
export const Eyebrow = ({ children, withRule = false, className = "" }: IEyebrow) => (
  <p className={`eyebrow flex items-center gap-3 text-ink on-dark:text-white ${className}`}>
    <span aria-hidden className="h-0.5 w-6 bg-accent on-dark:bg-accent-light" />
    {children}
    {withRule && <span aria-hidden className="ml-3 h-px flex-1 bg-line on-dark:bg-line-light" />}
  </p>
);

export type SectionIntroAlign = "left" | "center";

export interface ISectionIntro {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: SectionIntroAlign;
  className?: string;
}

/** Eyebrow → heading → short supporting copy. The standard opening of a section. */
export const SectionIntro = ({ id, eyebrow, title, description, align = "left", className = "" }: ISectionIntro) =>
  align === "center" ? (
    <div className={`mx-auto flex max-w-2xl flex-col items-center text-center ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="display-md mt-5">
        {title}
      </h2>
      {description && <p className="body-lg mt-5 text-graphite on-dark:text-white/75">{description}</p>}
    </div>
  ) : (
    <div className={className}>
      <Eyebrow withRule>{eyebrow}</Eyebrow>
      <div className="max-w-2xl">
        <h2 id={id} className="display-md mt-6">
          {title}
        </h2>
        {description && <p className="body-lg mt-5 text-graphite on-dark:text-white/75">{description}</p>}
      </div>
    </div>
  );
