import late_cretaceous from "@/app/research-highlights/best-preserved-late-cretaceous-enantiornithine/late_cretaceous_enantiornithine.jpg"
import { Heading } from "@/components/ui/typography";
import { ResearchArticle, ResearchImage } from "@/components/research-article";
import { createResearchMetadata } from "@/lib/research-highlights";

export const metadata = createResearchMetadata("best-preserved-late-cretaceous-enantiornithine");
const links = [
  { label: 'cnrs', href: 'https://www.paris-centre.cnrs.fr/fr/cnrsinfo/yuornis-junchangi-le-squelette-de-lenantiornithe-le-plus-complet-trouve-ce-jour' },
  { label: 'weixin', href: 'https://mp.weixin.qq.com/s/t6pYelq1qY0KpcHtf2YPUA' },
]

export default function Page() {
  return (
    <ResearchArticle slug="best-preserved-late-cretaceous-enantiornithine" links={links}>
      <p className="mb-4">
        Late Cretaceous fossil birds are rare. When found, they are usually very incomplete hindering attempts to understand broad trends in avian evolution across the Cretaceous.
      </p>
      <ResearchImage src={late_cretaceous} alt="A Late Cretaceous enantiornithine skull" width={500} height={500} />

      <Heading as="h5" size="label" text='The best-preserved Late Cretaceous enantiornithine known to date.' />
      <p className="mb-4">
        The holotype of <span className='italic'>Yuornis</span> represents the best-preserved Late Cretaceous enantiornithine known to date. The specimen consists of a complete 3D skull together with a partial postcranial skeleton. While the postcranial skeleton reveals features typical of enantiornithines and very different than in modern birds, the skull reveals that by the Late Cretaceous enantiornithines had evolved a number of features in parallel to modern birds such as the reduction of the lacrimal, loss of the postorbital, and an edentulous rostrum.
      </p>


      </ResearchArticle>
  )
}
