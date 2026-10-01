import type { NavItemType, SiteConfigType } from "@/types/settings";

// Business details used by metadata, structured data, the header and the footer.
// NEXT_PUBLIC_SITE_URL is the full public address, including any GitHub Pages path
// (e.g. https://<user>.github.io/yasveo). Set it to the production domain once confirmed.
export const siteConfig: SiteConfigType = {
  name: "YASVEO",
  tagline: "Global creator network",
  description:
    "YASVEO connects brands and creators through audience, content and genuine relevance: creator partnerships built on the right fit, not follower count.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yasveo.com").replace(/\/$/, ""),
  locale: "en_GB",
  email: undefined,
  socialLinks: [],
};

/** Search engines may index the site. The GitHub Pages preview sets NEXT_PUBLIC_ALLOW_INDEXING=false. */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

/** The shared Open Graph / X card (public/og-image.png). */
export const socialImage = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}, ${siteConfig.tagline.toLowerCase()}`,
};

export const primaryNavigation: NavItemType[] = [
  { label: "For Brands", href: "/brands" },
  { label: "For Creators", href: "/creators" },
];

// One CTA phrase per audience page, repeated wherever that page asks for action. Each leads to the page's form.
export const brandAction: NavItemType = { label: "Find creators", href: "/brands#enquire" };
export const creatorAction: NavItemType = { label: "Join YASVEO", href: "/creators#join" };

/** The header's CTA on each audience page. The home page has none: its two routes are the action. */
export const pageActions: Partial<Record<string, NavItemType>> = {
  "/brands": brandAction,
  "/creators": creatorAction,
};
