import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/Logo/Logo";
import { siteConfig } from "@/config/SiteConfig";
import type { NavItemType } from "@/types/settings";

const exploreLinks: NavItemType[] = [
  { label: "Home", href: "/" },
  { label: "For Brands", href: "/brands" },
  { label: "For Creators", href: "/creators" },
];

const contactLinks: NavItemType[] = [
  { label: "Brand enquiry", href: "/brands#enquire" },
  { label: "Creator application", href: "/creators#apply" },
];

const linkClassName = "block py-1 text-white/75 transition-colors duration-300 hover:text-accent-light";

export const Footer = () => (
  <footer data-tone="ink" className="bg-ink px-gutter pt-[clamp(80px,10vw,160px)] pb-10 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-6">
          <Link href="/" className="inline-flex flex-col items-start gap-7">
            <LogoMark className="h-[clamp(40px,4.4vw,64px)] w-auto" />
            <LogoWordmark label={siteConfig.name} className="h-[clamp(20px,2.2vw,30px)] w-auto" />
          </Link>
          <p className="eyebrow mt-5 tracking-[0.42em] text-white/65">{siteConfig.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
          <nav aria-labelledby="footer-explore">
            <p id="footer-explore" className="eyebrow mb-5 text-white/65">
              Explore
            </p>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-contact">
            <p id="footer-contact" className="eyebrow mb-5 text-white/65">
              Work with us
            </p>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {siteConfig.email && (
                <li>
                  <a href={`mailto:${siteConfig.email}`} className={linkClassName}>
                    {siteConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {siteConfig.socialLinks.length > 0 && (
            <nav aria-labelledby="footer-follow">
              <p id="footer-follow" className="eyebrow mb-5 text-white/65">
                Follow
              </p>
              <ul>
                {siteConfig.socialLinks.map((social) => (
                  <li key={social.url}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="eyebrow mt-[clamp(72px,9vw,128px)] flex flex-col gap-3 border-t border-line-light pt-6 text-white/65 sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>Relevance · Trust · Creativity · Connection</span>
      </div>
    </div>
  </footer>
);
