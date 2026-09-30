"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import { ButtonLink } from "@/components/Button/Button";
import { LogoWordmark } from "@/components/Logo/Logo";
import { headerAction, primaryNavigation, siteConfig } from "@/config/SiteConfig";
import { useHasScrolled } from "@/hooks/Hooks";
import { getPathname, normalisePath } from "@/utils/Utils";
import { MenuToggle, MobileMenu } from "./MobileMenu";

export const Header = () => {
  const pathname = normalisePath(usePathname());
  const hasScrolled = useHasScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isSolid = hasScrolled && !isMenuOpen;

  const toggleMenu = useCallback(() => setIsMenuOpen((open) => !open), [setIsMenuOpen]);
  const closeMenu = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      toggleRef.current?.focus();
    },
    [setIsMenuOpen],
  );

  return (
    <>
      <header
        data-tone={isMenuOpen ? "ink" : undefined}
        onKeyDown={handleKeyDown}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-500 ${
          isSolid ? "border-line bg-white/95 py-3 backdrop-blur-md" : "border-transparent py-5"
        } ${isMenuOpen ? "text-white" : "text-ink"}`}
      >
        <div className="mx-auto grid max-w-[calc(80rem+2*var(--spacing-gutter))] grid-cols-[1fr_auto] items-center gap-8 px-gutter lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="justify-self-start py-2" onClick={closeMenu}>
            <LogoWordmark label={`${siteConfig.name} home`} className="h-3.5 w-auto sm:h-4" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {primaryNavigation.map((item) => {
                const isActive = !item.href.includes("#") && getPathname(item.href) === pathname;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`label-nav relative block py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                        isActive ? "after:scale-x-100" : "after:scale-x-0"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden justify-self-end lg:block">
            <ButtonLink href={headerAction.href} size="sm" withArrow={false}>
              {headerAction.label}
            </ButtonLink>
          </div>

          <MenuToggle ref={toggleRef} isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} onKeyDown={handleKeyDown} />
    </>
  );
};
