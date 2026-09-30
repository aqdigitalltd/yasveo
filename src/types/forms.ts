export type BrandEnquiryValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  promoting: string;
  partnershipTypes: string[];
  budget: string;
  timeframe: string;
  goals: string;
  additionalInfo: string;
};

export type CreatorApplicationValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  primaryPlatform: string;
  profileUrl: string;
  otherProfiles: string;
  audienceSize: string;
  niches: string[];
  contentDescription: string;
  brandInterests: string;
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
