/** A short titled point: what we look for, process steps. */
export type PointType = {
  title: string;
  description: string;
};

export type ComparisonSideType = {
  heading: string;
  traits: string[];
};

/** Two ways of judging a creator, side by side. `preferred` is the side YASVEO argues for. */
export type ComparisonType = {
  overlooked: ComparisonSideType;
  preferred: ComparisonSideType;
  /** Shown beneath when the comparison could be mistaken for data. */
  caption?: string;
};

export type FaqItemType = {
  question: string;
  answer: string;
};

export type SeoType = {
  title: string;
  description: string;
  /** Route path, e.g. "/brands". Used for the canonical URL. */
  path: string;
};
