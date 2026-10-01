import type { ReactNode } from "react";
import { Section } from "@/components/Section/Section";
import { SectionIntro } from "@/components/SectionIntro/SectionIntro";

export interface IFormLayout {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  form: ReactNode;
}

/** The page's conversion point: a short intro beside the form card, on the soft accent tint. */
export const FormLayout = ({ id, eyebrow, title, description, form }: IFormLayout) => (
  <Section bg="soft" id={id} labelledBy={`${id}-heading`}>
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
      <SectionIntro
        id={`${id}-heading`}
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="lg:col-span-5"
      />

      <div className="rounded-xs bg-white p-6 sm:p-9 lg:col-span-7">{form}</div>
    </div>
  </Section>
);
