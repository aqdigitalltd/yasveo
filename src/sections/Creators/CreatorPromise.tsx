import { CheckList } from "@/components/CheckList/CheckList";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { creatorPromises } from "@/content/CreatorsContent";

export const CreatorPromise = () => (
  <Section bg="ink" labelledBy="promise-heading">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      <SectionIntro
        id="promise-heading"
        eyebrow="Our promise"
        title={
          <>
            Honest about <em>what we can offer.</em>
          </>
        }
        description="Applying doesn't guarantee brand work. It starts a conversation, and we'll only bring you opportunities we believe genuinely suit you."
      />
      <CheckList items={creatorPromises} className="text-lg lg:pt-12" />
    </div>
  </Section>
);
