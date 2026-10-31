import baby_enantiornithine from "@/app/research-highlights/baby-enantiornithines-had-it-tough/baby_enantiornithines_had_it_tough_vertical.jpg"
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("baby-enantiornithines-had-it-tough");

const links = [
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0195667123001003#:~:text=A%20new%20specimen%20of%20Cenomanian,portions%20encased%20in%20keratinous%20sheaths' },
]

export default function Page() {
  return (
    <ResearchArticle slug="baby-enantiornithines-had-it-tough" links={links}>
      <ResearchImage src={baby_enantiornithine} alt="Image of amber preserving enantiornithine feathers" maxWidth={375} />
      <p className="mb-4">
        A little piece of amber preserving a cluster of immature feathers has led to the hypothesis that rapid molting in enantiornithines may have been an important factor in their extinction. High energetic demands are associated with extinction vulnerability. Baby enantiornithines are hypothesized to be highly precocial, hatching flight ready with no parental care. This means heavy caloric demands for keeping warm, locomotion (flight), foraging, and growing. As birds grow, they need to replace their plumage (molt) to keep up with increases in body size. The faster the molt, the more energy that is required. All evidence indicates that baby enantiornithines molted their feathers very fast, adding to their energy requirements. This wasn’t a problem for 90 million years but when the meteor hit Earth 66 million years ago it caused an impact winter with lower global temperatures and little to no primary productivity (meaning little to no available food). In this changed environment, molting fast (and thus needing more energy to stay warm) and being highly precocial may have worked against this group, causing their extinction.
      </p>
      </ResearchArticle>
  )
}
