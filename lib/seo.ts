import type { Metadata } from "next";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.jpg",
}: PageMetaInput): Metadata {
  const fullTitle = `${title} | DANI Cadastru`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      url: path,
      siteName: "DANI Cadastru",
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — DANI Cadastru`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — DANI Cadastru`,
        },
      ],
    },
  };
}
