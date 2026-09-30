import type { ReactNode } from "react";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";

export interface IFormLayout {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  /** What happens after submitting, shown under the intro. */
  nextSteps: string[];
  form: ReactNode;
}

/** A tinted section with the intro and next steps beside the form card. */
export const FormLayout = ({ id, eyebrow, title, description, nextSteps, form }: IFormLayout) => (
  <Section bg="mist" id={id} labelledBy={`${id}-heading`}>
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionIntro id={`${id}-heading`} eyebrow={eyebrow} title={title} description={description} />

          <h3 className="eyebrow mt-12 text-muted">What happens next</h3>
          <ol className="mt-5 flex flex-col gap-4">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-xs bg-ink font-brand text-xs text-white">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-graphite">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="rounded-xs border border-line bg-white p-6 sm:p-10 lg:col-span-8">
        {form}
      </div>
    </div>
  </Section>
);
