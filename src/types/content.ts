/** An image from /public or a remote host allowed in next.config.ts. */
export type ImageAssetType = {
  src: string;
  alt: string;
};

/** A short titled point: what we look for, process steps. */
export type PointType = {
  title: string;
  description: string;
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
