import Link from "next/link";
import { LogoWordmark } from "@/components/Logo/Logo";
import { primaryNavigation, siteConfig } from "@/config/SiteConfig";

const linkClassName = "label-nav text-white/75 transition-colors duration-300 hover:text-accent-light";

export const Footer = () => (
  <footer data-tone="ink" className="bg-ink px-gutter py-10 text-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <Link href="/" className="self-start py-1 md:self-auto">
        <LogoWordmark label={`${siteConfig.name} home`} className="h-4 w-auto" />
      </Link>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {primaryNavigation.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            </li>
          ))}
          {siteConfig.email && (
            <li>
              <a href={`mailto:${siteConfig.email}`} className={linkClassName}>
                Email us
              </a>
            </li>
          )}
          {siteConfig.socialLinks.map((social) => (
            <li key={social.url}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="label-nav text-white/65">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </div>
  </footer>
);
