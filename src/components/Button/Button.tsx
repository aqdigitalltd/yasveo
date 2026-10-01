import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

// One CTA style across the site: a solid terracotta button, so the next action is never in doubt.

/** md: page actions and form submits. sm: compact, for the header. */
export type ButtonSize = "md" | "sm";

const baseClassName =
  "group label-button inline-flex items-center justify-center gap-3 rounded-xs bg-accent text-center text-white transition-colors duration-300 hover:bg-accent-hover";

const sizeClassNames: Record<ButtonSize, string> = {
  md: "min-h-13 px-7 py-3",
  sm: "min-h-10 px-4 py-2",
};

const Arrow = () => (
  <span
    aria-hidden
    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
  >
    →
  </span>
);

export interface IButton extends ComponentProps<"button"> {
  withArrow?: boolean;
}

export const Button = ({ withArrow = false, className = "", type = "button", children, ...props }: IButton) => (
  <button
    type={type}
    className={`${baseClassName} ${sizeClassNames.md} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    {...props}
  >
    {children}
    {withArrow && <Arrow />}
  </button>
);

export interface IButtonLink {
  href: string;
  children: ReactNode;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
}

export const ButtonLink = ({ href, children, size = "md", withArrow = true, className = "" }: IButtonLink) => (
  <Link href={href} className={`${baseClassName} ${sizeClassNames[size]} ${className}`}>
    {children}
    {withArrow && <Arrow />}
  </Link>
);
