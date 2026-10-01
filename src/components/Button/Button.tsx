import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

// The primary CTA is a solid rust button, the same on both audience pages. The outline sits beside a
// solid button as the second choice (the home page routes); it fills on hover.

/** lg: the home page routes. md: page actions and form submits. sm: compact, for the header. */
export type ButtonSize = "lg" | "md" | "sm";

/** solid: filled with the accent. outline: white with an accent border and text, filling on hover. */
export type ButtonVariant = "solid" | "outline";

const baseClassName =
  "group label-button inline-flex items-center justify-center gap-3 rounded-sm border-2 border-accent text-center transition-colors duration-300";

const variantClassNames: Record<ButtonVariant, string> = {
  solid: "bg-accent text-white hover:border-accent-deep hover:bg-accent-deep",
  outline: "bg-white text-accent hover:bg-accent hover:text-white",
};

const sizeClassNames: Record<ButtonSize, string> = {
  lg: "min-h-15 px-8 py-3 text-[0.8125rem]",
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
    className={`${baseClassName} ${variantClassNames.solid} ${sizeClassNames.md} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    {...props}
  >
    {children}
    {withArrow && <Arrow />}
  </button>
);

export interface IButtonLink {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
}

export const ButtonLink = ({
  href,
  children,
  variant = "solid",
  size = "md",
  withArrow = true,
  className = "",
}: IButtonLink) => (
  <Link href={href} className={`${baseClassName} ${variantClassNames[variant]} ${sizeClassNames[size]} ${className}`}>
    {children}
    {withArrow && <Arrow />}
  </Link>
);
