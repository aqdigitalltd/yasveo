import type { FaqItemType, PointType } from "@/types/content";

// The comparison in "Followers don't tell the whole story". It illustrates the idea; it is not campaign data.
export const largeFollowingTraits = ["Low attention", "Weak brand fit"];

export const smallerFollowingTraits = ["Strong attention", "Relevant audience", "Genuine connection"];

export const fitSignals: PointType[] = [
  {
    title: "Audience",
    description: "Are the right people actually watching? We look at who a creator reaches, not only how many.",
  },
  {
    title: "Attention",
    description: "Are people engaging with the creator's content, or scrolling straight past it?",
  },
  {
    title: "Relevance",
    description: "Does the creator naturally make sense for your brand, so the partnership feels believable?",
  },
];

export const brandSteps: PointType[] = [
  {
    title: "Tell us what you're looking for",
    description: "Give us a quick idea of your brand, campaign or objective.",
  },
  {
    title: "We look for the right fit",
    description: "We consider creators based on content, audience and relevance, not simply follower count.",
  },
  {
    title: "Build the partnership",
    description: "We help bring the right brand and creator together.",
  },
];

export const brandFaqs: FaqItemType[] = [
  {
    question: "What does YASVEO do for brands?",
    answer:
      "YASVEO is a creator partnership business. We connect brands with creators for influencer marketing campaigns, based on how well a creator's content and audience fit the brand.",
  },
  {
    question: "Do you only work with big creators?",
    answer:
      "No. Follower count is one signal, not the deciding one. A smaller creator with an attentive, relevant audience can be a better partner than a much larger one.",
  },
  {
    question: "How do you decide who's a good fit?",
    answer:
      "We look at who is watching, how they engage, and whether the creator naturally makes sense for your brand and campaign.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "A short description of your brand and what you'd like help with. We'll pick up budget, timings and the rest of the detail when we talk.",
  },
];
