import type { Metadata, Viewport } from "next";
import { Inter, Lexend_Exa } from "next/font/google";
import { allowIndexing, siteConfig } from "@/config/SiteConfig";
import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";
import { getAbsoluteUrl, serialiseJsonLd } from "@/utils/Utils";
import "./globals.css";

// Two faces only: Lexend Exa for brand moments (headings, navigation, buttons, labels), Inter for reading.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexendExa = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  // Preview deployments (GitHub Pages) stay out of search results.
  ...(!allowIndexing && { robots: { index: false, follow: false } }),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      slogan: siteConfig.tagline,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: getAbsoluteUrl("/brand/yasveo-logo.jpg"),
      ...(siteConfig.email && { email: siteConfig.email }),
      ...(siteConfig.socialLinks.length > 0 && { sameAs: siteConfig.socialLinks.map((social) => social.url) }),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="en-GB" className={`${inter.variable} ${lexendExa.variable}`}>
    <body className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(organisationJsonLd) }} />
      <a
        href="#main"
        className="label-nav sr-only z-60 bg-ink px-5 py-4 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
