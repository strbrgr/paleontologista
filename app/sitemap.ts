import type { MetadataRoute } from "next";
import { researchHighlights } from "@/lib/research-highlights";

const siteUrl = "https://paleontologista.com";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/biography", priority: 0.8 },
  { path: "/bibliography", priority: 0.8 },
  { path: "/cv", priority: 0.6 },
  { path: "/field-work", priority: 0.7 },
  { path: "/oconnor-lab", priority: 0.7 },
  { path: "/outreach", priority: 0.7 },
  { path: "/childrens-books", priority: 0.7 },
  { path: "/contact", priority: 0.5 },
  { path: "/research-highlights", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...researchHighlights.map((highlight) => ({
      url: `${siteUrl}/research-highlights/${highlight.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
