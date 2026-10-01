import type { BrandEnquiryValuesType, CreatorApplicationValuesType, FieldCopyType } from "@/types/forms";

// Labels, placeholders, starting values and validation for both forms. Each form is deliberately
// four fields: its job is to capture the lead, not to onboard. To add a field: add it to the values
// type in types/forms.ts, then here, then render it in the form component.
// Keep error messages short: each field reserves one line for its message.

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredText = (message: string, maxLength: number) => ({
  required: message,
  validate: (value: string) => value.trim() !== "" || message,
  maxLength: { value: maxLength, message: `Please keep this under ${maxLength.toLocaleString("en-GB")} characters` },
});

/** Loose on purpose: "yourbrand.com" is as welcome as a full URL. */
export const websitePattern = /^\s*\S+\.\S+\s*$/;

const emailRules = {
  required: "Please enter your email address",
  pattern: { value: emailPattern, message: "Please enter a valid email address" },
};

/* ------------------------------ Brand enquiry ----------------------------- */

export const brandEnquiryFields: Record<keyof BrandEnquiryValuesType, FieldCopyType> = {
  name: { label: "Name", placeholder: "Your name" },
  email: { label: "Email", placeholder: "you@company.com" },
  website: { label: "Company / brand website", placeholder: "https://yourbrand.com" },
  message: {
    label: "What are you looking for?",
    placeholder: "Tell us briefly about your campaign or what you'd like help with...",
  },
};

export const emptyBrandEnquiry: BrandEnquiryValuesType = {
  name: "",
  email: "",
  website: "",
  message: "",
};

export const brandEnquiryRules = {
  name: requiredText("Please enter your name", 150),
  email: emailRules,
  website: {
    ...requiredText("Please enter your website", 300),
    pattern: { value: websitePattern, message: "Please enter a valid website address" },
  },
  message: requiredText("Please tell us what you're looking for", 2000),
};

/* --------------------------- Creator application -------------------------- */

export const creatorApplicationFields: Record<keyof CreatorApplicationValuesType, FieldCopyType> = {
  name: { label: "Name", placeholder: "Your name" },
  email: { label: "Email", placeholder: "you@email.com" },
  profile: {
    label: "Main social profile",
    placeholder: "Paste your TikTok, Instagram, YouTube or other profile",
  },
  content: { label: "Tell us about your content", placeholder: "What do you create and who is it for?" },
};

export const emptyCreatorApplication: CreatorApplicationValuesType = {
  name: "",
  email: "",
  profile: "",
  content: "",
};

export const creatorApplicationRules = {
  name: requiredText("Please enter your name", 150),
  email: emailRules,
  profile: requiredText("Please add your profile link or handle", 300),
  content: requiredText("Please tell us what you create", 2000),
};
