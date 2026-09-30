import { ButtonLink } from "@/components/Button/Button";
import { Section } from "@/components/Section/Section";

export const GetStarted = () => (
  <Section id="get-started" labelledBy="get-started-heading" className="text-center">
    <div className="flex flex-col items-center">
      <h2 id="get-started-heading" className="display-xl max-w-[12ch]">
        Let&apos;s find <em>the right fit.</em>
      </h2>
      <p className="body-lg mt-5 max-w-xl text-graphite">
        Tell us a little about you. It takes a few minutes, and there&apos;s no commitment.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
        <ButtonLink href="/brands#enquire">
          I&apos;m a Brand
        </ButtonLink>
        <ButtonLink href="/creators#apply">
          I&apos;m a Creator
        </ButtonLink>
      </div>
    </div>
  </Section>
);
