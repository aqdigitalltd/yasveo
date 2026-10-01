// Both forms capture a lead in four fields. Anything else is collected after the first conversation.

export type BrandEnquiryValuesType = {
  name: string;
  email: string;
  website: string;
  message: string;
};

export type CreatorApplicationValuesType = {
  name: string;
  email: string;
  profile: string;
  content: string;
};

/** What a field shows: its label and its placeholder. */
export type FieldCopyType = {
  label: string;
  placeholder: string;
};

export type FormName = "brand-enquiry" | "creator-application";

export type SubmissionFieldType = {
  label: string;
  value: string;
};

/** What a form hands to the delivery service: provider-neutral and ready to email. */
export type FormSubmissionType = {
  form: FormName;
  subject: string;
  replyTo: string;
  fields: SubmissionFieldType[];
};
