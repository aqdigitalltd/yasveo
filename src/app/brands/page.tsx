import { BrandEnquiryForm } from "@/components/BrandEnquiryForm/BrandEnquiryForm";
import { Faq } from "@/components/Faq/Faq";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { PageHero } from "@/components/PageHero/PageHero";
import { PointsSection } from "@/components/PointsSection/PointsSection";
import { brandAction } from "@/config/SiteConfig";
import { brandFaqs, brandSteps, fitSignals } from "@/content/BrandsContent";
import { images } from "@/content/Images";
import { FollowerStory } from "@/sections/Brands/FollowerStory";
import { buildMetadata } from "@/utils/Utils";

export const metadata = buildMetadata({
  title: "Find creators who fit your brand",
  description:
    "Influencer marketing built on relevance, not follower count. YASVEO connects brands with creators whose content and audience genuinely fit. Tell us what you're looking for.",
  path: "/brands",
});

// One goal: a brand submits the enquiry form (#enquire). Every section either explains the proposition or leads there.
const BrandsPage = () => (
  <>
    <PageHero
      eyebrow="For brands"
      title="Find creators who fit your brand."
      description="YASVEO connects brands with creators based on genuine relevance between your brand, the creator, their content and the audience watching it."
      action={brandAction}
      image={images.productTutorial}
    />
    <FollowerStory />
    <PointsSection
      id="what-matters"
      eyebrow="What matters instead"
      title="What we look for in a creator."
      points={fitSignals}
      action={brandAction}
    />
    <PointsSection
      id="how-it-works"
      eyebrow="How it works"
      title="Three steps to the right creators."
      points={brandSteps}
      numbered
      bg="mist"
    />
    <FormLayout
      id="enquire"
      eyebrow={brandAction.label}
      title="Tell us what you're looking for."
      description="Four quick fields are enough to start. We'll pick up the detail when we talk."
      form={<BrandEnquiryForm />}
    />
    <Faq title="Questions brands ask us." items={brandFaqs} action={brandAction} />
  </>
);

export default BrandsPage;
