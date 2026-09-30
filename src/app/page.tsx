import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { siteConfig } from "@/config/SiteConfig";
import { homeSteps } from "@/content/HomeContent";
import { Audiences } from "@/sections/Home/Audiences";
import { GetStarted } from "@/sections/Home/GetStarted";
import { HomeHero } from "@/sections/Home/HomeHero";
import { Proposition } from "@/sections/Home/Proposition";
import { Statement } from "@/sections/Home/Statement";
import { buildMetadata } from "@/utils/Utils";

const seo = buildMetadata({
  title: "Creator partnerships people actually believe in",
  description: siteConfig.description,
  path: "/",
});

// The layout's title template only applies to child segments, so the home page sets its full title.
export const metadata = { ...seo, title: { absolute: `${siteConfig.name} · Creator partnerships people actually believe in` } };

const HomePage = () => (
  <>
    <HomeHero />
    <Proposition />
    <Audiences />
    <HowItWorks
      title={
        <>
          Simple, personal, <em>and built on fit.</em>
        </>
      }
      steps={homeSteps}
    />
    <Statement />
    <GetStarted />
  </>
);

export default HomePage;
