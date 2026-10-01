"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/Button/Button";
import { LogoWordmark } from "@/components/Logo/Logo";
import { pageActions, primaryNavigation, siteConfig } from "@/config/SiteConfig";
import { normalisePath } from "@/utils/Utils";

// The logo, the two audience links, and the current page's CTA. On phones the links give way to
// the CTA: the home page's own routes and the footer cover switching audience.
export const Header = () => {
  const pathname = normalisePath(usePathname());
  const pageAction = pageActions[pathname];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-header max-w-[calc(80rem+2*var(--spacing-gutter))] items-center justify-between gap-4 px-gutter">
        <Link href="/" className="py-2">
          <LogoWordmark label={`${siteConfig.name} home`} className="h-3 w-auto sm:h-4" />
        </Link>

        <div className="flex items-center gap-10">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {primaryNavigation.map((item) => {
                const isActive = item.href === pathname;

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

          {pageAction && (
            <ButtonLink href={pageAction.href} size="sm" withArrow={false}>
              {pageAction.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </header>
  );
};
