import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  for (const project of projects) {
    entries.push({
      url: `${SITE_URL}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    if (project.hasPrivacyPage) {
      entries.push({
        url: `${SITE_URL}/projects/${project.slug}/privacy`,
        changeFrequency: "yearly",
        priority: 0.3,
      });
    }
  }

  return entries;
}
