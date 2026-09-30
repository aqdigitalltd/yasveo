"use client";

import Link from "next/link";
import type { KeyboardEvent, Ref } from "react";
import { ButtonLink } from "@/components/Button/Button";
import { LogoMark } from "@/components/Logo/Logo";
import { primaryNavigation, siteConfig } from "@/config/SiteConfig";

export interface IMenuToggle {
  ref: Ref<HTMLButtonElement>;
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuToggle = ({ ref, isOpen, onToggle }: IMenuToggle) => (
  <button
    ref={ref}
    type="button"
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    onClick={onToggle}
    className="label-nav flex h-11 items-center gap-3 justify-self-end lg:hidden"
  >
    <span>{isOpen ? "Close" : "Menu"}</span>
    <span aria-hidden className="relative block h-2 w-6">
      <span
        className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
          isOpen ? "translate-y-1 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
          isOpen ? "-translate-y-[3px] -rotate-45" : ""
        }`}
      />
    </span>
  </button>
);

const menuActions = [
  { label: "I'm a Brand", href: "/brands#enquire" },
  { label: "I'm a Creator", href: "/creators#apply" },
];

export interface IMobileMenu {
  isOpen: boolean;
  onClose: () => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

// While open, globals.css hides <main> and <footer> so focus stays in the menu.
export const MobileMenu = ({ isOpen, onClose, onKeyDown }: IMobileMenu) =>
  isOpen ? (
    <div
      id="mobile-menu"
      data-menu-open="true"
      data-tone="ink"
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-gutter pt-28 pb-10 text-white lg:hidden"
    >
      <nav aria-label="Main">
        <ul className="flex flex-col gap-2">
          {primaryNavigation.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                autoFocus={index === 0}
                className="block py-2 font-brand text-[clamp(1.75rem,8vw,2.5rem)] leading-tight font-light tracking-[-0.05em] hover:text-accent-light"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
        {menuActions.map((action) => (
          <ButtonLink key={action.href} href={action.href} onClick={onClose}>
            {action.label}
          </ButtonLink>
        ))}
      </div>

      <div className="mt-auto flex items-end justify-between gap-6 pt-16">
        <p className="eyebrow text-white/65">{siteConfig.tagline}</p>
        <LogoMark className="h-6 w-auto text-accent-light" />
      </div>
    </div>
  ) : null;
