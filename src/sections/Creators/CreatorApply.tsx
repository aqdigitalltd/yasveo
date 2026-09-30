import { CreatorApplicationForm } from "@/components/CreatorApplicationForm/CreatorApplicationForm";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { applicationNextSteps } from "@/content/CreatorsContent";

export const CreatorApply = () => (
  <FormLayout
    id="apply"
    eyebrow="Apply"
    title={
      <>
        Tell us about <em>your work.</em>
      </>
    }
    description="A few minutes is all it takes. Applying doesn't commit you to anything."
    nextSteps={applicationNextSteps}
    form={<CreatorApplicationForm />}
  />
);
