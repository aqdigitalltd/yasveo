import { siteConfig } from "@/config/SiteConfig";
import { AudienceRouter } from "@/sections/Home/AudienceRouter";
import { buildMetadata } from "@/utils/Utils";

const seo = buildMetadata({
  title: "Creator partnerships built on the right fit",
  description:
    "YASVEO connects brands and creators through audience, content and genuine relevance. Tell us whether you're a brand or a creator to get started.",
  path: "/",
});

// The layout's title template only applies to child segments, so the home page sets its full title.
export const metadata = { ...seo, title: { absolute: `${siteConfig.name} · Creator partnerships built on the right fit` } };

// An entry point, not a homepage: it sends the visitor to /brands or /creators. The selling happens there.
const HomePage = () => <AudienceRouter />;

export default HomePage;
