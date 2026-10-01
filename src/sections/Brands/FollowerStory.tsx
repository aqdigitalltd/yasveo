import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { largeFollowingTraits, smallerFollowingTraits } from "@/content/BrandsContent";

interface IFollowingColumn {
  heading: string;
  traits: string[];
  /** The side we argue for: picked out in the accent. */
  isPreferred?: boolean;
}

const FollowingColumn = ({ heading, traits, isPreferred = false }: IFollowingColumn) => (
  <div className={`border-t-2 pt-5 ${isPreferred ? "border-accent-light" : "border-line-light"}`}>
    <h3 className={`heading-md ${isPreferred ? "text-white" : "text-white/65"}`}>{heading}</h3>
    <span aria-hidden className={`mt-3 block text-lg ${isPreferred ? "text-accent-light" : "text-white/65"}`}>
      ↓
    </span>
    <ul className={`mt-3 flex flex-col gap-2 ${isPreferred ? "text-white" : "text-white/65"}`}>
      {traits.map((trait) => (
        <li key={trait}>{trait}</li>
      ))}
    </ul>
  </div>
);

/** Why follower count alone is a poor guide. No figures: the comparison shows an idea, not results. */
export const FollowerStory = () => (
  <Section bg="ink" id="followers" labelledBy="followers-heading">
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6">
        <SectionIntro
          id="followers-heading"
          eyebrow="The landscape has changed"
          title="Followers don't tell the whole story."
          description="The biggest creator isn't automatically the best partner. What matters is whether people are actually watching, engaging and paying attention, and whether that audience is right for your brand."
        />
        <p className="heading-lg mt-10 text-accent-light">Reach matters. Relevance matters more.</p>
      </div>

      <div className="lg:col-span-6 lg:pt-10">
        <div className="grid grid-cols-2 gap-6 sm:gap-10">
          <FollowingColumn heading="A large following" traits={largeFollowingTraits} />
          <FollowingColumn heading="A smaller following" traits={smallerFollowingTraits} isPreferred />
        </div>
        <p className="mt-8 text-sm text-white/65">
          An illustration of what follower count can hide, not campaign data.
        </p>
      </div>
    </div>
  </Section>
);
