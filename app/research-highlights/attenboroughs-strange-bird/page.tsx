import imparavis from '@/app/research-highlights/attenboroughs-strange-bird/imparavis_vertical.jpg'
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("attenboroughs-strange-bird");
const links = [
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0195667124000405' },
]

export default function Page() {
  return (
    <ResearchArticle slug="attenboroughs-strange-bird" links={links}>
      <ResearchImage src={imparavis} alt="Image of a enantiornithine fossil" maxWidth={375} priority />
      <p className="mb-4">
        Alex Clark recently led a project describing a new species of enantiornithine, <span className='italic'>Imparavis attenboroughi</span>. This is the first toothless enantiornithine described from the Jehol avifauna, pushing back the record of tooth loss in this clade by 50 million years! Previously, tooth loss in dinosaurs (including birds) was strongly linked to herbivory, in particular the replacement of teeth with the gastric mill. The absence of gastroliths in all enantiornithines suggests that tooth loss in this clade was driven by other selective pressures.
      </p>
      </ResearchArticle>
  )
}

