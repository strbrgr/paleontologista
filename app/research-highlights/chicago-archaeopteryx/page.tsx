import archaeopteryx from "@/app/research-highlights/chicago-archaeopteryx/chicago_archaeopteryx.jpg"
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("chicago-archaeopteryx");

const links = [
  { label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-08912-4' },
]

export default function Page() {
  return (
    <ResearchArticle slug="chicago-archaeopteryx" links={links}>
      <ResearchImage src={archaeopteryx} alt="Image of the Chicago archaeopteryx fossil" maxWidth={500} />
      <p className="mb-4">
        In 2022 the Field Museum acquired the Chicago <span className='italic'>Archaeopteryx</span>, the best preserved exemplar of the Icon of Evolution. In our first paper, we describe how tertials helped dinosaurs adapt their wing-like arrangements of feathers on the forelimbs into wings capable of generating lift. We also describe the preservation of soft tissues on the right hand and foot that suggest <span className='italic'>Archaeopteryx</span> could use its hands to climb, while its foot pads were primarily adapted for walking on the ground. This specimen also boasts the best known skull including an articulated palate and the first complete vertebral column, showing a tail longer than previously known.
      </p>
      </ResearchArticle>
  )
}
