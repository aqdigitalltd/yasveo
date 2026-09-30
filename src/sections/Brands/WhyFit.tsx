import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { fitBenefits } from "@/content/BrandsContent";

export const WhyFit = () => (
  <Section labelledBy="why-fit-heading" className="pt-0">
    <SectionIntro
      id="why-fit-heading"
      eyebrow="Why fit matters"
      title={
        <>
          A bigger audience isn&apos;t always <em>a better one.</em>
        </>
      }
      description="A large following tells you how many people might see something. Fit tells you whether they'll care. Reach still matters; it just isn't where we start."
    />

    <ul className="mt-14 grid gap-5 md:grid-cols-3">
      {fitBenefits.map((benefit) => (
        <li key={benefit.title} className="bg-mist p-7 sm:p-8">
          <span aria-hidden className="block h-1 w-10 bg-accent" />
          <h3 className="heading-md mt-6">{benefit.title}</h3>
          <p className="mt-3 text-graphite">{benefit.description}</p>
        </li>
      ))}
    </ul>
  </Section>
);
