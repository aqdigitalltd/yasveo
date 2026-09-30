/** An image from /public or a remote host allowed in next.config.ts. */
export type ImageAssetType = {
  src: string;
  alt: string;
};

/** A short titled point: values, principles, process steps, checklist items. */
export type PointType = {
  title: string;
  description: string;
};

export type ServiceType = PointType & {
  image: ImageAssetType;
};

export type SeoType = {
  title: string;
  description: string;
  /** Route path, e.g. "/brands". Used for the canonical URL. */
  path: string;
};
