import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.origin) return [];
  return [
    "",
    "/services",
    "/work",
    "/work/automated-follow-ups",
    "/work/northstone",
    "/about",
    "/contact",
    "/builders-merchants",
    "/privacy",
  ].map((path) => ({
    url: `${site.origin}${path}/`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
