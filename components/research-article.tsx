import { ReactNode } from "react";
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
  width: number;
  height: number;
  priority?: boolean;
};

export function ResearchImage({ src, alt, width, height, priority }: ResearchImageProps) {
  return (
    <div className="flex justify-center my-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        priority={priority}
      />
    </div>
  );
}

export function ResearchArticle({ slug, links, children }: ResearchArticleProps) {
  const { title } = getResearchHighlight(slug);

  return (
    <article className="max-w-2xl mx-auto px-10 md:px-0">
      <Heading as="h1" size="subsection" text={title} />
      {children}
      <ExternalLinks links={links} />
    </article>
  );
}
