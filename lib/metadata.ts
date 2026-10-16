import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    authors: [{ name: "Jingmai O'Connor" }],
    openGraph: {
      type: "website",
      url: path,
      siteName: "Jingmai O'Connor",
      title,
      description,
      images: [
        {
          url: "/opengraph-image.jpg",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.jpg"],
    },
  };
}
