export type NavItemType = {
  label: string;
  href: string;
};

export type SocialLinkType = {
  label: string;
  url: string;
};

export type SiteConfigType = {
  name: string;
  tagline: string;
  description: string;
  /** Production origin without a trailing slash, e.g. "https://www.yasveo.com". */
  url: string;
  locale: string;
  /** Shown in the footer and structured data once confirmed. */
  email?: string;
  socialLinks: SocialLinkType[];
};
