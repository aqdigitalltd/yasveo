import type { ReactNode } from "react";

export interface IEyebrow {
  children: ReactNode;
  className?: string;
}

/** The section marker: a short accent rule and a tracked label. */
export const Eyebrow = ({ children, className = "" }: IEyebrow) => (
  <p className={`eyebrow flex items-center gap-3 text-ink on-dark:text-white ${className}`}>
    <span aria-hidden className="h-0.5 w-6 bg-accent on-dark:bg-accent-light" />
    {children}
  </p>
);

export interface ISectionIntro {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

/** Eyebrow → heading → short supporting copy. The standard opening of a section. */
export const SectionIntro = ({ id, eyebrow, title, description, className = "" }: ISectionIntro) => (
  <div className={`max-w-2xl ${className}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 id={id} className="display-md mt-5">
      {title}
    </h2>
    {description && <p className="body-lg mt-5 text-graphite on-dark:text-white/75">{description}</p>}
  </div>
);
