import { BrandEnquiryForm } from "@/components/BrandEnquiryForm/BrandEnquiryForm";
import { Faq } from "@/components/Faq/Faq";
import { FollowerComparison } from "@/components/FollowerComparison/FollowerComparison";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { PageHero } from "@/components/PageHero/PageHero";
import { PointsSection } from "@/components/PointsSection/PointsSection";
import { brandAction } from "@/config/SiteConfig";
import { brandFaqs, brandSteps, fitSignals, followerComparison, followerStory } from "@/content/BrandsContent";
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
      description="YASVEO connects brands with creators based on genuine relevance: the right audience, real attention and content that fits. Tell us what you're looking for and we'll look for the creators who make sense for it."
      action={brandAction}
      note="Four quick fields. No commitment."
    />
    <FollowerComparison
      id="followers"
      eyebrow="The landscape has changed"
      title="Followers don't tell the whole story."
      paragraphs={followerStory}
      statement="Reach matters. Relevance matters more."
      comparison={followerComparison}
    />
    <PointsSection
      id="what-matters"
      eyebrow="What matters instead"
      title="Audience. Attention. Relevance."
      description="If follower count isn't enough, what is? These are the three things we look at before suggesting a creator for your brand."
      points={fitSignals}
      action={brandAction}
    />
    <PointsSection
      id="how-it-works"
      eyebrow="How it works"
      title="Three steps to the right creators."
      points={brandSteps}
      numbered
      bg="paper"
      lines="flow"
    />
    <FormLayout
      id="enquire"
      eyebrow={brandAction.label}
      title="Tell us what you're looking for."
      description="Four quick fields are enough to start. We'll reply by email to talk through your brand and what you'd like to achieve, and pick up budget, timings and the rest of the detail from there."
      form={<BrandEnquiryForm />}
    />
    <Faq title="Questions brands ask us." items={brandFaqs} />
  </>
);

export default BrandsPage;
