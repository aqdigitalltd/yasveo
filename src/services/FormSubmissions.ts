import { brandEnquiryFields, creatorApplicationFields } from "@/content/FormFields";
import { deliverSubmission } from "@/services/FormDelivery";
import type {
  BrandEnquiryValuesType,
  CreatorApplicationValuesType,
  FieldCopyType,
  SubmissionFieldType,
} from "@/types/forms";

/** Pairs each answer with its form label, in field order. */
const toSubmissionFields = (
  values: Record<string, string>,
  fields: Record<string, FieldCopyType>,
): SubmissionFieldType[] =>
  Object.entries(fields).map(([name, { label }]) => ({ label, value: (values[name] ?? "").trim() }));

export const submitBrandEnquiry = (values: BrandEnquiryValuesType): Promise<void> =>
  deliverSubmission({
    form: "brand-enquiry",
    subject: `Brand enquiry: ${values.website.trim()}`,
    replyTo: values.email.trim(),
    fields: toSubmissionFields(values, brandEnquiryFields),
  });

export const submitCreatorApplication = (values: CreatorApplicationValuesType): Promise<void> =>
  deliverSubmission({
    form: "creator-application",
    subject: `Creator application: ${values.name.trim()}`,
    replyTo: values.email.trim(),
    fields: toSubmissionFields(values, creatorApplicationFields),
  });
