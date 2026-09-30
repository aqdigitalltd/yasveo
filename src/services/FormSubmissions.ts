import { brandEnquiryLabels, creatorApplicationLabels } from "@/content/FormFields";
import { deliverSubmission } from "@/services/FormDelivery";
import type { BrandEnquiryValuesType, CreatorApplicationValuesType, SubmissionFieldType } from "@/types/forms";

const formatValue = (value: string | string[]): string =>
  (Array.isArray(value) ? value.join(", ") : value).trim();

/** Pairs each answer with its form label, in label order, leaving out unanswered optional fields. */
const toSubmissionFields = (
  values: Record<string, string | string[]>,
  labels: Record<string, string>,
): SubmissionFieldType[] =>
  Object.entries(labels)
    .map(([name, label]) => ({ label, value: formatValue(values[name] ?? "") }))
    .filter((field) => field.value !== "");

export const submitBrandEnquiry = (values: BrandEnquiryValuesType): Promise<void> =>
  deliverSubmission({
    form: "brand-enquiry",
    subject: `Brand enquiry: ${values.company.trim()}`,
    replyTo: values.email.trim(),
    fields: toSubmissionFields(values, brandEnquiryLabels),
  });

export const submitCreatorApplication = (values: CreatorApplicationValuesType): Promise<void> =>
  deliverSubmission({
    form: "creator-application",
    subject: `Creator application: ${values.firstName.trim()} ${values.lastName.trim()}`,
    replyTo: values.email.trim(),
    fields: toSubmissionFields(values, creatorApplicationLabels),
  });
