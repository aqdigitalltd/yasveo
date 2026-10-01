import { CreatorApplicationForm } from "@/components/CreatorApplicationForm/CreatorApplicationForm";
import { Faq } from "@/components/Faq/Faq";
import { FollowerComparison } from "@/components/FollowerComparison/FollowerComparison";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { PageHero } from "@/components/PageHero/PageHero";
import { PointsSection } from "@/components/PointsSection/PointsSection";
import { creatorAction } from "@/config/SiteConfig";
import {
  audienceComparison,
  audienceStory,
  creatorFaqs,
  creatorReasons,
  creatorSteps,
} from "@/content/CreatorsContent";
import { buildMetadata } from "@/utils/Utils";

export const metadata = buildMetadata({
  title: "Brand partnerships that fit your content",
  description:
    "Join YASVEO to be considered for brand partnerships that make sense for your content, your audience and your style. No follower minimum.",
  path: "/creators",
});

// One goal: a creator submits their details (#join). Every section either explains the proposition or leads there.
const CreatorsPage = () => (
  <>
    <PageHero
      eyebrow="For creators"
      title="Partnerships that fit your content."
      description="YASVEO connects creators with brands that make sense for your content, your audience and your style. Not every opportunity is the right one, so we look for the ones that are."
      action={creatorAction}
      note="Four quick fields. No follower minimum."
    />
    <FollowerComparison
      id="audience"
      eyebrow="It's not a numbers game"
      title="The right audience can matter more than the biggest audience."
      paragraphs={audienceStory}
      statement="Reach matters. Relevance matters more."
      comparison={audienceComparison}
    />
    <PointsSection
      id="why-yasveo"
      eyebrow="Why YASVEO"
      title="Work with brands that fit."
      description="You shouldn't have to take a partnership just because one turned up. The best ones make sense for what you create, who watches it and the brands you'd genuinely stand behind."
      points={creatorReasons}
      action={creatorAction}
    />
    <PointsSection
      id="how-it-works"
      eyebrow="How it works"
      title="Three steps to join."
      points={creatorSteps}
      numbered
      bg="paper"
      lines="flow"
    />
    <FormLayout
      id="join"
      eyebrow={creatorAction.label}
      title="Tell us about you."
      description="One profile and a line about your content is all we need to start. We'll take a look at what you create and get in touch where there's a suitable fit."
      form={<CreatorApplicationForm />}
    />
    <Faq title="Questions creators ask us." items={creatorFaqs} action={creatorAction} />
  </>
);

export default CreatorsPage;
