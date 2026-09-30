import { ButtonLink } from "@/components/Button/Button";
import { PageHero } from "@/components/PageHero/PageHero";
import { images } from "@/content/Images";

export const CreatorsHero = () => (
  <PageHero
    eyebrow="For creators"
    title={
      <>
        Brand partnerships{" "}
        <span className="lg:block lg:pl-[1.2em]">
          <em>that suit your content.</em>
        </span>
      </>
    }
    description="Tell us about you and what you create. We'll get to know your niche and your audience, and consider you for opportunities that genuinely fit, whatever the size of your following."
    image={images.creatorFilmingAtHome}
    insetImage={images.podcastHost}
    caption={{ figure: "Fig. 03", text: "Your voice, your audience" }}
    actions={
      <>
        <ButtonLink href="#apply">Apply now</ButtonLink>
        <ButtonLink href="#how-it-works" variant="secondary" withArrow={false}>
          How it works
        </ButtonLink>
      </>
    }
  />
);
