import { CreatorApplicationForm } from "@/components/CreatorApplicationForm/CreatorApplicationForm";
import { Faq } from "@/components/Faq/Faq";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { PageHero } from "@/components/PageHero/PageHero";
import { PointsSection } from "@/components/PointsSection/PointsSection";
import { creatorAction } from "@/config/SiteConfig";
import { creatorFaqs, creatorReasons, creatorSteps } from "@/content/CreatorsContent";
import { images } from "@/content/Images";
import { RightAudience } from "@/sections/Creators/RightAudience";
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
      description="YASVEO connects creators with brands that make sense for your content, your audience and your style."
      action={creatorAction}
      image={images.creatorFilmingAtHome}
    />
    <RightAudience />
    <PointsSection
      id="why-yasveo"
      eyebrow="Why YASVEO"
      title="Brand partnerships that make sense for you."
      points={creatorReasons}
      action={creatorAction}
    />
    <PointsSection
      id="how-it-works"
      eyebrow="How it works"
      title="Three steps to join."
      points={creatorSteps}
      numbered
      bg="mist"
    />
    <FormLayout
      id="join"
      eyebrow={creatorAction.label}
      title="Tell us about you."
      description="One profile and a line about your content is all we need to start."
      form={<CreatorApplicationForm />}
    />
    <Faq title="Questions creators ask us." items={creatorFaqs} action={creatorAction} />
  </>
);

export default CreatorsPage;
