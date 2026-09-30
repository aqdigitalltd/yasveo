import { ButtonLink } from "@/components/Button/Button";
import { PageHero } from "@/components/PageHero/PageHero";
import { images } from "@/content/Images";

export const HomeHero = () => (
  <PageHero
    eyebrow="Creator partnership agency"
    title={
      <>
        We connect brands with{" "}
        <span className="lg:block lg:pl-[1.2em]">
          <em>the right creators.</em>
        </span>
      </>
    }
    description="Not simply the biggest names, but creators whose audience, content and values genuinely fit. Partnerships people actually believe in."
    image={images.filmingOnLocation}
    insetImage={images.colourBackdropShoot}
    caption={{ figure: "Fig. 01", text: "The work behind the work" }}
    actions={
      <>
        <ButtonLink href="/brands">I&apos;m a Brand</ButtonLink>
        <ButtonLink href="/creators">
          I&apos;m a Creator
        </ButtonLink>
      </>
    }
  />
);
