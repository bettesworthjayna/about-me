import type { MetadataRoute } from "next";

function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  const urlWithProtocol = siteUrl.startsWith("http")
    ? siteUrl
    : `https://${siteUrl}`;

  return urlWithProtocol.replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
