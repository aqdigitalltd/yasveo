import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ------------------------------ Form buttons ------------------------------ */
// Submits stay solid so they read unmistakably as buttons.

export interface IButton extends ComponentProps<"button"> {
  withArrow?: boolean;
}

export const Button = ({ withArrow = false, className = "", type = "button", children, ...props }: IButton) => (
  <button
    type={type}
    className={`group label-button inline-flex min-h-13 items-center justify-center gap-3 rounded-xs bg-ink px-7 py-3 text-white transition-colors duration-300 hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    {...props}
  >
    {children}
    {withArrow && <LinkArrow />}
  </button>
);

/* ------------------------------- Link CTAs -------------------------------- */
// Concept 2's underlined links: the underline sweeps away on hover while the arrow moves on.

/** primary: terracotta underline. secondary: a quieter grey underline. */
export type ButtonLinkVariant = "primary" | "secondary";

/** md: page actions. sm: compact, for the header. */
export type ButtonLinkSize = "md" | "sm";

const variantClassNames: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-[linear-gradient(var(--color-accent),var(--color-accent))] on-dark:bg-[linear-gradient(var(--color-accent-light),var(--color-accent-light))]",
  secondary:
    "bg-[linear-gradient(var(--color-line-strong),var(--color-line-strong))] on-dark:bg-[linear-gradient(var(--color-line-light),var(--color-line-light))]",
};

const sizeClassNames: Record<ButtonLinkSize, string> = {
  md: "gap-3 pb-2 font-brand text-[clamp(1.0625rem,1.3vw,1.25rem)] font-light tracking-[-0.03em] bg-size-[100%_2px] hover:bg-size-[0%_2px]",
  sm: "label-nav gap-2 pb-1.5 bg-size-[100%_1.5px] hover:bg-size-[0%_1.5px]",
};

const LinkArrow = () => (
  <span
    aria-hidden
    className="transition-transform duration-500 ease-editorial group-hover:translate-x-1.5 motion-reduce:transition-none"
  >
    →
  </span>
);

export interface IButtonLink {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = true,
  className = "",
  onClick,
}: IButtonLink) => (
  <Link
    href={href}
    onClick={onClick}
    className={`group inline-flex items-center self-start bg-position-[0_100%] bg-no-repeat transition-[background-size] duration-500 ease-editorial hover:bg-position-[100%_100%] motion-reduce:transition-none ${variantClassNames[variant]} ${sizeClassNames[size]} ${className}`}
  >
    {children}
    {withArrow && <LinkArrow />}
  </Link>
);
