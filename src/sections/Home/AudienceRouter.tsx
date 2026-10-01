import Link from "next/link";
import { LogoMark } from "@/components/Logo/Logo";
import { siteConfig } from "@/config/SiteConfig";

interface IAudienceRoute {
  href: string;
  label: string;
  description: string;
}

// Equal weight on purpose: the page speaks to both audiences and favours neither.
const audienceRoutes: IAudienceRoute[] = [
  { href: "/brands", label: "I'm a Brand", description: "Find creators who fit your brand." },
  { href: "/creators", label: "I'm a Creator", description: "Find partnerships that fit your content." },
];

/** The whole home page: one headline, one sentence and the two routes. Its only job is to route the visitor. */
export const AudienceRouter = () => (
  <section className="flex flex-1 items-center px-gutter py-[clamp(48px,8vw,112px)]">
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
      <LogoMark className="h-10 w-auto text-accent sm:h-12" />
      <p className="eyebrow mt-7 text-muted">{siteConfig.tagline}</p>
      <h1 className="display-hero mt-5 max-w-[18ch]">Creator partnerships built on the right fit.</h1>
      <p className="body-lg mt-6 max-w-xl text-graphite">
        We connect brands and creators through audience, content and genuine relevance.
      </p>

      <ul className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2">
        {audienceRoutes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className="group flex h-full items-center justify-between gap-6 rounded-xs bg-accent p-6 text-white transition-colors duration-300 hover:bg-accent-hover sm:p-8"
            >
              <span>
                <span className="heading-lg block">{route.label}</span>
                <span className="mt-2 block text-white/85">{route.description}</span>
              </span>
              <span
                aria-hidden
                className="font-brand text-2xl transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
