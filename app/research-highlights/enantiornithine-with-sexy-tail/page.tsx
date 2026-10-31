import sexy_tail from "@/app/research-highlights/enantiornithine-with-sexy-tail/enantiornithine_sexy_tail.jpg"
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("enantiornithine-with-sexy-tail");

const links = [
  { label: 'Popular Science', href: 'https://www.popsci.com/science/fossil-bird-giant-feathers/' },
  { label: 'Sci News', href: 'https://www.sci.news/paleontology/yuanchuavis-kompsosoura-10079.html' },
  { label: 'Block Club Chicago', href: 'https://blockclubchicago.org/2021/09/16/newly-discovered-fancy-feathered-fossil-bird-has-a-field-museum-link/' },
  { label: 'LiveScience', href: 'https://www.livescience.com/dinosaur-age-bird-long-tail-feathers' },
  { label: 'martha stewart', href: 'https://www.marthastewart.com/8164967/prehistoric-peacock-discovery-new-study-october-2021' },
]

export default function Page() {
  return (
    <ResearchArticle slug="enantiornithine-with-sexy-tail" links={links}>
      <p className="mb-4">
        The tail is the most diverse part of a bird’s plumage – this is because while the tail can help in flight, its not essential, and thus free to evolve elaborate sexual ornaments in certain conditions.
      </p>

      <ResearchImage src={sexy_tail} alt="Yuanchuavis, an enantiornithine bird" maxWidth={500} />

      <p className="mb-8">
        <span className='italic'>Yuanchuavis</span>, a new species of pengornithid enantiornithine, preserves an elaborate tail morphology called a pin-tail, the first evidence of this tail morphology (which has evolved many times in living birds) in this diverse clade of Cretaceous birds. The pin-tail in <span className='italic'>Yuanchuavis</span> consists of a short rectricial fan together with two fully pennaceous rachis-dominated tail feathers (an extinct feather morphotype). These large, elongate feathers are inferred to have been costly (both in terms of initial energetic investment to grow them and the energetic cost associated with flight due to the increase in mass and drag) and thus represent an honest signal of fitness that evolved under sexual selection.
      </p>

      </ResearchArticle>
  )
}
