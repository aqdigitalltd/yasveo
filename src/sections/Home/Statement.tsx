import { Section } from "@/components/Section/Section";
import { Eyebrow } from "@/components/SectionIntro/SectionIntro";

/** The page's one expressive typographic moment. */
export const Statement = () => (
  <Section bg="ink" labelledBy="statement-heading" className="py-[clamp(112px,14vw,224px)]">
    <Eyebrow withRule>Our philosophy</Eyebrow>
    <h2 id="statement-heading" className="display-xl mt-12">
      <span className="block">Reach gets attention.</span>
      <em className="block text-accent-light sm:pl-[8vw]">Relevance builds connection.</em>
    </h2>
    <p className="body-lg mt-10 max-w-xl text-white/75 sm:ml-[8vw]">
      A creator&apos;s audience trusts them for a reason. We look after that trust, because it&apos;s what makes a
      partnership work for everyone.
    </p>
  </Section>
);
