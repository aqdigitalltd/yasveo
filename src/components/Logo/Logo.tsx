import { markPath, wordmarkPath } from "./LogoPaths";

export interface ILogo {
  className?: string;
  /** Accessible name. Leave out when the logo sits inside a link or heading that is already labelled. */
  label?: string;
}

const getA11yProps = (label?: string) =>
  label ? { role: "img", "aria-label": label } : { "aria-hidden": true, focusable: false };

export const LogoMark = ({ className, label }: ILogo) => (
  <svg viewBox={markPath.viewBox} fill="currentColor" className={className} {...getA11yProps(label)}>
    <path fillRule="evenodd" d={markPath.d} />
  </svg>
);

export const LogoWordmark = ({ className, label }: ILogo) => (
  <svg viewBox={wordmarkPath.viewBox} fill="currentColor" className={className} {...getA11yProps(label)}>
    <path fillRule="evenodd" d={wordmarkPath.d} />
  </svg>
);
