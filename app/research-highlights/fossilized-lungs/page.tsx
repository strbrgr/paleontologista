import Image from 'next/image'
import Link from 'next/link'
import fossilizedLungs from "@/app/research-highlights/fossilized-lungs/fossilized-lungs.jpg"
import { HeaderFive, HeaderFour, HeaderSix } from '@/components/ui/typography'

export const metadata = {
  title: "Fossilized lungs",
  description: 'Research Highlight',
}

const links = [
  { label: 'Economist', href: 'https://www.economist.com/science-and-technology/2018/10/25/a-breathtaking-discovery' },
  { label: 'National Geographic', href: 'https://www.nationalgeographic.com/science/article/news-fossil-lungs-bird-dinosaurs-cretaceous-soft-tissue-paleontology' },
  { label: 'Audubon', href: 'https://www.audubon.org/news/this-fossil-probably-first-preserve-ancient-bird-lungs' },
  { label: 'IflScience', href: 'https://www.economist.com/science-and-technology/2018/10/25/a-breathtaking-discoveryhttps://www.iflscience.com/firstever-fossilized-lungs-of-dinosaurera-bird-found-hint-at-the-origin-of-flight-50265' },
  { label: 'LiveScience', href: 'https://www.livescience.com/63880-oldest-fossil-bird-lung.html' },
  { label: 'Popular Science', href: 'https://www.popsci.com/lungs-birds-dinosaur-survival/' },
  { label: 'PNAS', href: 'https://www.pnas.org/doi/10.1073/pnas.1805803115' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Fossilized lungs' />
      <p className="mb-8">
        Fossilized soft tissues are rare – even more rare are traces of internal organs (integument like skin and feathers being relatively more common). In an article published in the Proceedings of the National Academy of Sciences U.S.A., I described a specimen of <span className='italic'>Archaeorhynchus spathula</span>, a primitive ornithuromorph bird, preserving traces of the lung tissue. Scanning electron microscopic images of the lung tissue revealed that the extremely subdivided functional tissue of the lung that allows modern birds to meet the high oxygen demand of powered flight was already in place 128 Ma.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={fossilizedLungs}
          alt="Fossilized lungs in an Archaeorhynchus"
          width={500}
          height={500}
        />
      </div>

      <HeaderFive text='Abstract' />
      <p className="mb-4">
        We describe a specimen of the basal ornithuromorph <span className='italic'>Archaeorhynchus spathula</span> from the Lower Cretaceous Jiufotang Formation with extensive soft tissue preservation. Although it is the fifth specimen to be described, unlike the others it preserves significant traces of the plumage, revealing a pintail morphology previously unrecognized among Mesozoic birds, but common in extant neornithines. In addition, this specimen preserves the probable remnants of the paired lungs, an identification supported by topographical and macro- and microscopic anatomical observations. The preserved morphology reveals a lung very similar to that of living birds. It indicates that pulmonary specializations such as exceedingly subdivided parenchyma that allow birds to achieve the oxygen acquisition capacity necessary to support powered flight were present in ornithuromorph birds 120 Mya. Among extant air breathing vertebrates, birds have structurally the most complex and functionally the most efficient respiratory system, which facilitates their highly energetically demanding form of locomotion, even in extremely oxygen-poor environments. <span className='italic'>Archaeorhynchus</span> is commonly resolved as the most basal known ornithuromorph bird, capturing a stage of avian evolution in which skeletal indicators of respiration remain primitive yet the lung microstructure appears modern. This adds to growing evidence that many physiological modifications of soft tissue systems (e.g., digestive system and respiratory system) that characterize living birds and are key to their current success may have preceded the evolution of obvious skeletal adaptations traditionally tracked through the fossil record.
      </p>

      <HeaderSix text='Read more' />
      <ul className="list-disc list-inside space-y-1">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className='underline'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
