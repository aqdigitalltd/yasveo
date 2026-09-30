import Link from "next/link";
import type { ReactNode } from "react";

export interface IArrowLink {
  href: string;
  children: ReactNode;
  className?: string;
}

/** A quiet text link with an arrow, for secondary actions beside a button. */
export const ArrowLink = ({ href, children, className = "" }: IArrowLink) => (
  <Link
    href={href}
    className={`group inline-flex items-center gap-2 border-b border-current pb-1 text-lg transition-colors duration-300 hover:border-accent ${className}`}
  >
    {children}
    <span
      aria-hidden
      className="transition-transform duration-500 ease-editorial group-hover:translate-x-1 motion-reduce:transition-none"
    >
      →
    </span>
  </Link>
);
