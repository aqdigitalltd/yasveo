import type { ComparisonType, FaqItemType, PointType } from "@/types/content";

export const followerStory: string[] = [
  "The biggest creator isn't automatically the best partner. A follower count tells you how many people once chose to follow someone. It doesn't tell you whether they're still watching, whether they're the people you want to reach, or whether a partnership would feel natural.",
  "That's why influencer marketing chosen on reach alone can disappoint, and why a smaller creator with an attentive, relevant audience can be the stronger choice for a brand.",
];

// It illustrates the idea; it is not campaign data, and the caption says so.
export const followerComparison: ComparisonType = {
  overlooked: { heading: "A large following", traits: ["Low attention", "Weak brand fit"] },
  preferred: {
    heading: "A smaller following",
    traits: ["Strong attention", "Relevant audience", "Genuine connection"],
  },
  caption: "An illustration of what follower count can hide, not campaign data.",
};

export const fitSignals: PointType[] = [
  {
    title: "Audience",
    description:
      "It's not only how many people follow a creator. It's who those people are, and how closely they overlap with the audience your brand wants to reach.",
  },
  {
    title: "Attention",
    description:
      "A follower count doesn't show whether anyone is still watching. How a creator's recent content is performing, and how people respond to it, gives a far better picture of their influence.",
  },
  {
    title: "Relevance",
    description:
      "A partnership should make sense the moment someone sees it. The creator, their content, their audience and your brand should feel naturally aligned, not pushed together.",
  },
];

export const brandSteps: PointType[] = [
  {
    title: "Tell us what you're looking for",
    description:
      "Give us a quick idea of your brand, campaign or objective. A few lines is enough: we'll ask about the detail when we talk.",
  },
  {
    title: "We look for the right fit",
    description:
      "We consider creators based on their content, their audience and how relevant they are to your brand, not simply on follower count.",
  },
  {
    title: "Build the partnership",
    description:
      "We help bring the right brand and creator together, so the partnership starts from a genuine fit rather than a number.",
  },
];

export const brandFaqs: FaqItemType[] = [
  {
    question: "What does YASVEO do for brands?",
    answer:
      "YASVEO is a creator partnership business. We connect brands with creators for what's often called influencer marketing, with one difference in emphasis: we start from how well a creator's content and audience fit your brand, not from how many followers they have.",
  },
  {
    question: "Do you only work with big creators?",
    answer:
      "No. Follower count is one signal, not the deciding one. A smaller creator with an attentive, relevant audience can be a better partner than a much larger one, so we consider creators of different sizes.",
  },
  {
    question: "How do you decide who's a good fit?",
    answer:
      "We look at three things: who is watching, whether they're genuinely paying attention, and whether the creator naturally makes sense for your brand and campaign. A partnership people believe starts with all three.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "A short description of your brand and what you'd like help with. You don't need a finished brief. We'll pick up budget, timings and the rest of the detail when we talk.",
  },
  {
    question: "What happens after I enquire?",
    answer:
      "We read your enquiry and reply by email to talk through what you're looking for. Sending the form doesn't commit you to anything.",
  },
];
