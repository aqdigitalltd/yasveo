import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/utils/Utils";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1 },
  { path: "/brands", priority: 0.9 },
  { path: "/creators", priority: 0.9 },
];

const sitemap = (): MetadataRoute.Sitemap =>
  routes.map(({ path, priority }) => ({
    url: getAbsoluteUrl(path),
    changeFrequency: "monthly",
    priority,
  }));

export default sitemap;
