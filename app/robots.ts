import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Allow AI crawlers for GEO/AI-SEO
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "Claude-Web"],
        allow: "/",
      },
    ],
    sitemap: "https://sgautomotive.com/sitemap.xml",
    host: "https://sgautomotive.com",
  };
}
