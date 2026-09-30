import type { MetadataRoute } from "next";
import { allowIndexing } from "@/config/SiteConfig";
import { getAbsoluteUrl } from "@/utils/Utils";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => ({
  rules: allowIndexing ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
  sitemap: getAbsoluteUrl("/sitemap.xml"),
});

export default robots;
