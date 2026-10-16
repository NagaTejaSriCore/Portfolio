import type { Metadata } from "next";
import "./globals.css";
import { siteConfig, SITE_URL } from "@/data/site";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Naga Tejasri | Student | Full-Stack & AI/ML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-bg-main text-white antialiased selection:bg-accent-blue/30 selection:text-white">
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
