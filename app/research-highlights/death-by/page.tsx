import deathBy from "@/app/research-highlights/death-by/death-by.jpg"
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("death-by");

const links = [
  { label: 'National Geographic', href: 'https://www.nationalgeographic.com/science/article/first-fossil-bird-with-unlaid-egg-found-enantiornithine' },
  { label: 'PLOS', href: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0095036' },
  { label: 'Nature', href: 'https://www.nature.com/articles/s41467-019-09259-x' },
]

export default function Page() {
  return (
    <ResearchArticle slug="death-by" links={links}>
      <p className="mb-4">
        When an animal is preserved with evidence that it was rapidly buried by a collapsed sand dune, pyroclastic flow, or turbidite you can pretty safely assume that’s how the animal died.
      </p>
      <ResearchImage src={deathBy} alt="Stones in the guts of a Yanornis" maxWidth={500} />
      <p className="mb-8">
        In fossils found in lake deposits we normally don’t know exact cause of death. However, two exceptional Early Cretaceous bird fossils from China preserve unusual traces that hint at the final moments for these birds.
      </p>
      <p className='mb-8'>In a specimen of <span className='italic'>Yanornis</span> from the Jehol Biota, I demonstrated that stones preserved in the body were not in the stomach forming a gastric mill as previously described but rather trapped in the intestines, representing a case of intestinal impaction, a malady that kills approximately 1% of modern birds with a nearshore ecology similar to that hypothesized for <span className='italic'>Yanornis</span>. Another bird fossil named <span className='italic'>Avimaia</span> from the Xiagou Formation preserves an abnormal egg inside the body – <span className='italic'>Avimaia</span> probably died from a condition called egg-binding, in which the egg cannot exit the body. This condition is particularly common in small song-birds which are ecologically similar to enantiornithines, the clade to which <span className='italic'>Avimaia</span> belongs.</p>

      </ResearchArticle>
  )
}
