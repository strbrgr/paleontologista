import trex from "@/app/research-highlights/a-mystery-of-tyrannosaur-proportions/trex.jpg"
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("a-mystery-of-tyrannosaur-proportions");

const links = [
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0195667122002178' },
]

export default function Page() {
  return (
    <ResearchArticle slug="a-mystery-of-tyrannosaur-proportions" links={links}>
      <p className="mb-4">
        Pathology is one of the most difficult things to unravel in an extinct organism.
      </p>
      <ResearchImage src={trex} alt="Holes in the jaw of SUE the T. rex" maxWidth={500} />
      <p className="mb-8">
        Even with humans, the best understood of all living organisms, it is extremely difficult to determine pathological cause of death from the skeleton alone. As such, what hopes do we have of determining cause of pathologies observed in animals more than 66 million years old, with what we know of their biology limited to what we can infer from more often than not incomplete skeletal material (and if we are lucky a few odd patches of skin tissue)? This is the case in Tyrannosaurus rex FMNH 2081, affectionately referred to as SUE – the most complete adult T. rex currently known to science. SUE reveals numerous pathologies across its skeleton – arthritis in the tail, bone infection in the left fibula, broken ribs, a torn ligament in the right humerus, and gout in its hands. But the pathology that has scientists stumped are the strange circular holes that perforate the main bone forming the back half of the jaw. These holes are not part of the normal morphology. They occur without pattern and are found in about 15% of known specimens of tyrannosaur jaws. What caused them has long puzzled paleontologists. First thought to be a bacterial infection, they were more recently interpreted as resulting from infection by a protozoan called Trichomonas gallinae. This protozoan is estimated present in all pigeons without causing harm in most cases. Disturbances to the immune system can lead to imbalances that allow the protozoan populations to cause an illness known as frounce or trichomoniasis that can cause the throat to swell so that the bird starves to death. Thus was the hypothesized ignoble demise of the mighty SUE. However, closer inspection of the holes in the jaws of SUE show small spurs of bone growing from the edges indicating years of healing. Furthermore, a thorough review of veterinary literature reveals no evidence that trichomoniasis causes penetrating lesions in the back half of the jaw. What caused these holes? It’s still a mystery but we can say it was not likely to be Trichomonas and whatever caused them did not kill SUE.
      </p>
      </ResearchArticle>
  )
}
