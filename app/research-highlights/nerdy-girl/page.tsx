import chromeo from "@/app/research-highlights/nerdy-girl/chromeo.webp"
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("nerdy-girl");

const links = [
  { label: 'Palaeo Electronica', href: 'https://palaeo-electronica.org/content/blog/5742-jehol-bird' },
]

export default function Page() {
  return (
    <ResearchArticle slug="nerdy-girl" links={links}>
      <p className="mb-4">
        A new species of enantiornithine closely related to Longipteryx and named in honor of the Chromeo Funklordz.
      </p>
      <ResearchImage src={chromeo} alt="Image of Jingmai O'Connor and Chromeo" maxWidth={500} />
      </ResearchArticle>
  )
}
