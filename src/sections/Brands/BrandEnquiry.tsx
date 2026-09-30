import { BrandEnquiryForm } from "@/components/BrandEnquiryForm/BrandEnquiryForm";
import { FormLayout } from "@/components/FormLayout/FormLayout";
import { enquiryNextSteps } from "@/content/BrandsContent";

export const BrandEnquiry = () => (
  <FormLayout
    id="enquire"
    eyebrow="Start an enquiry"
    title={
      <>
        Tell us what <em>you&apos;re building.</em>
      </>
    }
    description="A few details are enough to start. There's no commitment, and no question is too early."
    nextSteps={enquiryNextSteps}
    form={<BrandEnquiryForm />}
  />
);
