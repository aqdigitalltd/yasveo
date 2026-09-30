import { ButtonLink } from "@/components/Button/Button";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { brandSteps } from "@/content/BrandsContent";
import { BrandEnquiry } from "@/sections/Brands/BrandEnquiry";
import { BrandsHero } from "@/sections/Brands/BrandsHero";
import { WhatWeHandle } from "@/sections/Brands/WhatWeHandle";
import { WhyFit } from "@/sections/Brands/WhyFit";
import { buildMetadata } from "@/utils/Utils";

export const metadata = buildMetadata({
  title: "Creator partnerships for brands",
  description:
    "Work with creators whose audience, content and values genuinely align with your brand. We shortlist, brief and manage creator partnerships chosen for fit, not follower count.",
  path: "/brands",
});

const BrandsPage = () => (
  <>
    <BrandsHero />
    <WhyFit />
    <HowItWorks
      title={
        <>
          From your goals <em>to the right creators.</em>
        </>
      }
      steps={brandSteps}
      action={<ButtonLink href="#enquire">Start an enquiry</ButtonLink>}
    />
    <WhatWeHandle />
    <BrandEnquiry />
  </>
);

export default BrandsPage;
