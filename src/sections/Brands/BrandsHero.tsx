import { ButtonLink } from "@/components/Button/Button";
import { PageHero } from "@/components/PageHero/PageHero";
import { images } from "@/content/Images";

export const BrandsHero = () => (
  <PageHero
    eyebrow="For brands"
    title={
      <>
        Find creators who{" "}
        <span className="lg:block lg:pl-[1.2em]">
          <em>genuinely fit your brand.</em>
        </span>
      </>
    }
    description="Tell us what you're trying to achieve. We'll identify creators whose audience, content and values align with it, then help you build the partnership."
    image={images.studioShoot}
    insetImage={images.productTutorial}
    caption={{ figure: "Fig. 02", text: "Every partnership starts with a brief" }}
    actions={
      <>
        <ButtonLink href="#enquire">Start an enquiry</ButtonLink>
        <ButtonLink href="#how-it-works" variant="secondary" withArrow={false}>
          How it works
        </ButtonLink>
      </>
    }
  />
);
