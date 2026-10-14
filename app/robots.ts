import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://nselectricals.com/sitemap.xml",
    host: "https://nselectricals.com",
  };
}
