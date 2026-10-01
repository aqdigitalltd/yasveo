import type { BrandEnquiryValuesType, CreatorApplicationValuesType, FieldCopyType } from "@/types/forms";

// Labels, placeholders, starting values and validation for both forms. Each form is deliberately
// four fields: its job is to capture the lead, not to onboard. To add a field: add it to the values
// type in types/forms.ts, then here, then render it in the form component.

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredText = (message: string, maxLength: number) => ({
  required: message,
  validate: (value: string) => value.trim() !== "" || message,
  maxLength: { value: maxLength, message: `Please keep this under ${maxLength.toLocaleString("en-GB")} characters` },
});

const emailRules = {
  required: "Please enter your email address",
  pattern: { value: emailPattern, message: "Please enter a valid email address" },
};

/* ------------------------------ Brand enquiry ----------------------------- */

export const brandEnquiryFields: Record<keyof BrandEnquiryValuesType, FieldCopyType> = {
  name: { label: "Name", placeholder: "Your name" },
  email: { label: "Email", placeholder: "you@company.com" },
  company: { label: "Brand / company", placeholder: "Your brand or company" },
  message: {
    label: "What are you looking for?",
    placeholder: "Tell us briefly about your campaign or what you'd like help with...",
  },
};

export const emptyBrandEnquiry: BrandEnquiryValuesType = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export const brandEnquiryRules = {
  name: requiredText("Please enter your name", 150),
  email: emailRules,
  company: requiredText("Please tell us your brand or company", 150),
  message: requiredText("Please tell us briefly what you're looking for", 2000),
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
  profile: requiredText("Please add a profile link or handle so we can see your content", 300),
  content: requiredText("Please tell us a little about what you create", 2000),
};
