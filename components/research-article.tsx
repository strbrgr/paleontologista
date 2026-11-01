import { ReactNode } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ExternalLinks, ExternalLink } from "@/components/ui/external-links";
import { Heading } from "@/components/ui/typography";
import { getResearchHighlight } from "@/lib/research-highlights";

type ResearchArticleProps = {
  slug: string;
  links: ExternalLink[];
  children: ReactNode;
};

type ResearchImageProps = {
  src: StaticImageData;
  alt: string;
  /** Optional display width; the source aspect ratio is always preserved. */
  maxWidth?: number;
  preload?: boolean;
};

export function ResearchImage({ src, alt, maxWidth, preload }: ResearchImageProps) {
  const width = Math.min(maxWidth ?? src.width, src.width);
  const height = Math.round((width * src.height) / src.width);

  return (
    <div className="flex justify-center my-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto max-w-full"
        sizes="(max-width: 672px) calc(100vw - 5rem), 672px"
        placeholder="blur"
        preload={preload}
      />
    </div>
  );
}

export function ResearchArticle({ slug, links, children }: ResearchArticleProps) {
  const { title } = getResearchHighlight(slug);

  return (
    <article className="max-w-2xl mx-auto px-10 md:px-0">
      <Link
        href="/research-highlights"
        className="mb-8 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
      >
        ← Research Highlights
      </Link>
      <Heading as="h1" size="subsection" text={title} />
      {children}
      <ExternalLinks links={links} />
    </article>
  );
}
