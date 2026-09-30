import type { BrandEnquiryValuesType, CreatorApplicationValuesType } from "@/types/forms";

// Labels, options, starting values and validation for both forms. To add a field: add it to the
// values type in types/forms.ts, then here, then render it in the form component.

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredText = (message: string, maxLength = 200) => ({
  required: message,
  validate: (value: string) => value.trim() !== "" || message,
  maxLength: { value: maxLength, message: `Please keep this under ${maxLength.toLocaleString("en-GB")} characters` },
});

const optionalText = (maxLength: number) => ({
  maxLength: { value: maxLength, message: `Please keep this under ${maxLength.toLocaleString("en-GB")} characters` },
});

const emailRules = {
  required: "Please enter your email address",
  pattern: { value: emailPattern, message: "Please enter a valid email address" },
};

const requiredChoice = (message: string) => ({ required: message });

const atLeastOne = (message: string) => ({
  validate: (selected: string[]) => selected.length > 0 || message,
});

/* ------------------------------ Brand enquiry ----------------------------- */

export const brandEnquiryLabels: Record<keyof BrandEnquiryValuesType, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Work email",
  company: "Company or brand",
  website: "Website or social profile",
  promoting: "What would you like to promote?",
  partnershipTypes: "What kind of partnership are you considering?",
  budget: "Approximate budget",
  timeframe: "Ideal timing",
  goals: "What would you like the partnership to achieve?",
  additionalInfo: "Anything else we should know?",
};

export const partnershipTypeOptions = [
  "Sponsored content",
  "Product launch or seeding",
  "Ongoing ambassadorship",
  "Event or experience",
  "Content for our own channels",
  "Not sure yet",
];

export const budgetOptions = [
  "Under £5,000",
  "£5,000 – £15,000",
  "£15,000 – £50,000",
  "£50,000+",
  "Not decided yet",
];

export const timeframeOptions = ["Within a month", "In 1–3 months", "In 3–6 months", "Just exploring for now"];

export const emptyBrandEnquiry: BrandEnquiryValuesType = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  website: "",
  promoting: "",
  partnershipTypes: [],
  budget: "",
  timeframe: "",
  goals: "",
  additionalInfo: "",
};

export const brandEnquiryRules = {
  firstName: requiredText("Please enter your first name", 100),
  lastName: requiredText("Please enter your last name", 100),
  email: emailRules,
  company: requiredText("Please tell us your company or brand", 150),
  website: optionalText(300),
  promoting: requiredText("Please tell us what you'd like to promote", 300),
  partnershipTypes: atLeastOne("Please choose at least one option"),
  budget: requiredChoice("Please choose an approximate budget"),
  timeframe: requiredChoice("Please choose a timeframe"),
  goals: requiredText("Please tell us a little about your goals", 2000),
  additionalInfo: optionalText(2000),
};

/* --------------------------- Creator application -------------------------- */

export const creatorApplicationLabels: Record<keyof CreatorApplicationValuesType, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  location: "Where are you based?",
  primaryPlatform: "Main platform",
  profileUrl: "Profile link or handle",
  otherProfiles: "Other profiles",
  audienceSize: "Approximate audience",
  niches: "What do you create around?",
  contentDescription: "Tell us about your content",
  brandInterests: "Brands or collaborations you'd enjoy",
};

export const platformOptions = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Podcast",
  "Blog or newsletter",
  "Twitch",
  "LinkedIn",
  "Other",
];

export const audienceSizeOptions = [
  "Under 10,000",
  "10,000 – 50,000",
  "50,000 – 250,000",
  "250,000+",
  "Prefer not to say",
];

export const nicheOptions = [
  "Fashion",
  "Beauty",
  "Lifestyle",
  "Travel",
  "Food & drink",
  "Health & fitness",
  "Technology",
  "Gaming",
  "Home & interiors",
  "Family & parenting",
  "Business & finance",
  "Something else",
];

export const emptyCreatorApplication: CreatorApplicationValuesType = {
  firstName: "",
  lastName: "",
  email: "",
  location: "",
  primaryPlatform: "",
  profileUrl: "",
  otherProfiles: "",
  audienceSize: "",
  niches: [],
  contentDescription: "",
  brandInterests: "",
};

export const creatorApplicationRules = {
  firstName: requiredText("Please enter your first name", 100),
  lastName: requiredText("Please enter your last name", 100),
  email: emailRules,
  location: requiredText("Please tell us where you're based", 150),
  primaryPlatform: requiredChoice("Please choose your main platform"),
  profileUrl: requiredText("Please add a link or handle so we can see your work", 300),
  otherProfiles: optionalText(600),
  audienceSize: {},
  niches: atLeastOne("Please choose at least one area"),
  contentDescription: requiredText("Please tell us a little about what you make", 2000),
  brandInterests: optionalText(1000),
};
