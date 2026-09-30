import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";
import { fitFactors } from "@/content/HomeContent";

export const Proposition = () => (
  <Section bg="mist" labelledBy="proposition-heading">
    <SectionIntro
      id="proposition-heading"
      align="center"
      eyebrow="Our approach"
      title={
        <>
          The biggest creator isn&apos;t <em>always the right one.</em>
        </>
      }
      description="Strong partnerships come from genuine fit. Before we recommend anyone, we look at how five things line up."
    />

    {/* A typographic "equation" rather than chips, so nothing looks clickable. */}
    <p className="mx-auto mt-14 flex max-w-5xl flex-wrap items-baseline justify-center gap-x-4 gap-y-3 border-t border-line pt-10 font-brand text-[clamp(1.25rem,2.4vw,2rem)] font-light tracking-[-0.04em] sm:gap-x-5">
      {fitFactors.map((factor, index) => (
        <span key={factor} className="flex items-baseline gap-x-4 sm:gap-x-5">
          {index > 0 && <Operator symbol="+" />}
          {factor}
        </span>
      ))}
      <span className="flex items-baseline gap-x-4 sm:gap-x-5">
        <Operator symbol="=" />
        <em className="text-accent">fit.</em>
      </span>
    </p>
  </Section>
);

interface IOperator {
  symbol: "+" | "=";
}

const operatorNames: Record<IOperator["symbol"], string> = { "+": "plus", "=": "equals" };

const Operator = ({ symbol }: IOperator) => (
  <span className="font-serif text-[1.15em] leading-none text-accent italic">
    <span aria-hidden>{symbol}</span>
    <span className="sr-only">{operatorNames[symbol]}</span>
  </span>
);
