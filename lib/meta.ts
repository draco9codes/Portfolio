import { siteConfig } from "@/lib/site";

export const defaultMetadata = {
  title: siteConfig.title,
  description: siteConfig.heroDescription,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.heroDescription,
    url: siteConfig.website,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.heroDescription,
  },
};