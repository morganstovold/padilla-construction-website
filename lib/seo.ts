import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  url = siteConfig.url,
  noindex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.description}`;

  return {
    title: fullTitle,
    description,
    applicationName: siteConfig.name,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.owner.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    ...(noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
