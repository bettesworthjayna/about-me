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

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
