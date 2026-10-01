import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";

/** The creator side of the follower philosophy: smaller, relevant creators are welcome. It promises nothing. */
export const RightAudience = () => (
  <Section bg="ink" id="audience" labelledBy="audience-heading">
    <SectionIntro
      id="audience-heading"
      eyebrow="It's not a numbers game"
      title="The right audience can matter more than the biggest audience."
      description="You don't need millions of followers to be valuable to a brand. We're interested in what you create, who watches it and what makes your community yours."
    />
    <p className="heading-lg mt-10 text-accent-light">Reach matters. Relevance matters more.</p>
  </Section>
);
