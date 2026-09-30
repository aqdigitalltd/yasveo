import type { Metadata } from "next";
import { siteConfig, socialImage } from "@/config/SiteConfig";
import type { SeoType } from "@/types/content";

/* ---------------------------------- Links --------------------------------- */

/** Strips a trailing slash so "/brands/" and "/brands" compare equal ("/" is kept). */
export const normalisePath = (path: string): string => path.replace(/(.)\/$/, "$1");

/** "/#process" → "/", "/brands" → "/brands". */
export const getPathname = (href: string): string => normalisePath(href.split("#")[0] || "/");

/** "/brands" → "/brands/" to match the static export's trailingSlash; files ("/og-image.png") are left alone. */
const withTrailingSlash = (path: string): string => (path.endsWith("/") || /\.\w+$/.test(path) ? path : `${path}/`);

export const getAbsoluteUrl = (path: string): string => `${siteConfig.url}${withTrailingSlash(path)}`;

/* ----------------------------------- SEO ---------------------------------- */

const socialImageMetadata = {
  url: getAbsoluteUrl(socialImage.path),
  width: socialImage.width,
  height: socialImage.height,
  alt: socialImage.alt,
};

// URLs are absolute so they keep any GitHub Pages base path (metadataBase would drop it).
export const buildMetadata = ({ title, description, path }: SeoType): Metadata => ({
  title,
  description,
  alternates: { canonical: getAbsoluteUrl(path) },
  openGraph: {
    title,
    description,
    url: getAbsoluteUrl(path),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [socialImageMetadata],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageMetadata],
  },
});

/** Serialises structured data for a <script type="application/ld+json"> tag. */
export const serialiseJsonLd = (data: object): string => JSON.stringify(data).replace(/</g, "\\u003c");

/* -------------------------------- Numbering ------------------------------- */

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];

/** 0 → "i." (serif step numerals, up to ten items). */
export const toRoman = (index: number): string => `${romanNumerals[index] ?? index + 1}.`;
