"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/Hooks";

export interface IReveal {
  children: ReactNode;
  className?: string;
}

// A curtain lift on a child <img> as it scrolls into view. Content stays visible without JavaScript
// or with reduced motion (see globals.css).
export const Reveal = ({ children, className = "" }: IReveal) => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} data-in-view={isInView} className={`reveal-image ${className}`}>
      {children}
    </div>
  );
};
