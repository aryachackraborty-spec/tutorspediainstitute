import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/courses",
    "/faculty",
    "/gallery",
    "/achievements",
    "/testimonials",
    "/infrastructure",
    "/admissions",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
