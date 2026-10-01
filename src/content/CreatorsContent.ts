import type { ComparisonType, FaqItemType, PointType } from "@/types/content";

export const audienceStory: string[] = [
  "You don't need millions of followers to be valuable to a brand. We're interested in what you create, who watches it and what makes your community yours.",
  "A smaller community that genuinely pays attention can matter more to the right brand than a huge following that scrolls past. That's the side of your work a follower count never shows.",
];

export const audienceComparison: ComparisonType = {
  overlooked: { heading: "What a follower count shows", traits: ["How many people follow you"] },
  preferred: {
    heading: "What we look at",
    traits: ["Who actually watches", "How they engage", "What your content is about"],
  },
};

export const creatorReasons: PointType[] = [
  {
    title: "Your content",
    description:
      "What you create matters. We want to understand your style, your subject and what your audience comes to you for, so an opportunity starts from your content rather than working against it.",
  },
  {
    title: "Your audience",
    description:
      "A smaller, engaged community can be more valuable than a huge passive following. We're interested in who actually watches, listens and engages.",
  },
  {
    title: "The fit",
    description:
      "The strongest collaborations are the ones people believe. We look for brand opportunities that naturally align with you and your content, and you decide which are right for you.",
  },
];

// Nothing here promises work: opportunities depend on there being a suitable fit.
export const creatorSteps: PointType[] = [
  {
    title: "Tell us about you",
    description: "Share your main social profile and a line about what you create. It only takes a minute or two.",
  },
  {
    title: "We get to know your content",
    description:
      "We look at your content, your audience and the kinds of brand partnerships that could genuinely make sense for you.",
  },
  {
    title: "Relevant opportunities",
    description:
      "Where there's a suitable fit, we can explore bringing you and the right brand together. You choose what you take on.",
  },
];

export const creatorFaqs: FaqItemType[] = [
  {
    question: "Do I need a minimum number of followers?",
    answer:
      "No. We don't set a follower minimum. We look at your content, who watches it and how relevant that audience is to a brand, so smaller creators with an engaged community are welcome.",
  },
  {
    question: "Which platforms do you work with?",
    answer:
      "TikTok, Instagram, YouTube and others. Share the profile where you're most active and we'll start from there.",
  },
  {
    question: "Does joining guarantee brand partnerships?",
    answer:
      "No. Joining means we can consider you when a brand is looking for a creator like you. We get in touch where there's a suitable fit, and we'd rather be honest about that than promise work we can't guarantee.",
  },
  {
    question: "Do I have to say yes to an opportunity?",
    answer:
      "No. You decide which partnerships are right for you and your audience. A collaboration only works if it makes sense on both sides.",
  },
  {
    question: "What happens after I join?",
    answer:
      "We take a look at your profile and the content you make. If a brand opportunity looks like a genuine fit, we get in touch by email to talk it through.",
  },
];
