import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/data";

interface SitemapEntryConfig {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: SitemapEntryConfig[] = [
    // Primary Homepage
    { path: "", priority: 1.0, changeFrequency: "daily" },

    // Branch Landing Pages (High Commercial Local Intent)
    {
      path: "/branches/shyamnagar-road-dum-dum-park",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/branches/panache-green-city-satgachi",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    { path: "/branches", priority: 0.9, changeFrequency: "weekly" },

    // Priority Course Clusters
    {
      path: "/courses/academic-coaching",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/courses/abacus-mental-maths",
      priority: 0.85,
      changeFrequency: "weekly",
    },
    {
      path: "/courses/robotics-ai-coding",
      priority: 0.85,
      changeFrequency: "weekly",
    },
    {
      path: "/courses/spoken-english-languages",
      priority: 0.85,
      changeFrequency: "weekly",
    },
    {
      path: "/courses/public-speaking",
      priority: 0.85,
      changeFrequency: "weekly",
    },
    { path: "/courses", priority: 0.85, changeFrequency: "weekly" },

    // Conversion & Institutional Discovery
    { path: "/admissions", priority: 0.85, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faculty", priority: 0.8, changeFrequency: "monthly" },
    { path: "/infrastructure", priority: 0.8, changeFrequency: "monthly" },
    { path: "/achievements", priority: 0.75, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" },

    // Legal & Policies
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const currentDate = new Date().toISOString();

  return routes.map((item) => ({
    url: `${SITE_URL}${item.path}`,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
