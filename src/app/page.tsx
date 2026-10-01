import { siteConfig } from "@/config/SiteConfig";
import { AudienceRouter } from "@/sections/Home/AudienceRouter";
import { buildMetadata } from "@/utils/Utils";

const seo = buildMetadata({
  title: "Where brands and creators find the right fit",
  description:
    "YASVEO connects brands and creators through audience, content and genuine relevance. Brands find creators who fit; creators find brands that fit their content.",
  path: "/",
});

// The layout's title template only applies to child segments, so the home page sets its full title.
export const metadata = { ...seo, title: { absolute: `${siteConfig.name} · Where brands and creators find the right fit` } };

// An entry point, not a homepage: it sends the visitor to /brands or /creators. The selling happens there.
const HomePage = () => <AudienceRouter />;

export default HomePage;
