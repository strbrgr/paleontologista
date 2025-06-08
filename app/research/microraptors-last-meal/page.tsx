import Image from 'next/image'
import Link from 'next/link'
import microraptor from "@/app/research/microraptors-last-meal/microraptor.jpg"
import { HeaderFive, HeaderFour, HeaderSix } from '@/components/ui/typography'

const links = [
  { label: 'Economist', href: 'https://www.economist.com/science-and-technology/2011/11/12/the-belly-of-the-beast' },
  { label: 'NewScientist', href: 'https://www.newscientist.com/article/dn21182-first-evidence-that-dinosaurs-ate-birds/' },
  { label: 'PNAS', href: 'https://www.pnas.org/doi/10.1073/pnas.1117727108' },
  { label: 'National Geographic', href: 'https://www.nationalgeographic.com/science/article/new-fossil-lizard-found-inside-microraptor-dinosaur' },
  { label: 'NewScientist', href: 'https://www.newscientist.com/article/2209649-unknown-species-of-lizard-found-inside-a-gliding-dinosaurs-stomach/' },
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/pii/S0960982219307134?via%3Dihub' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Microraptor’s last meal' />
      <p className="mb-4">
        I have described two specimens of <span className='italic'>Microraptor</span> preserving ingested remains. One preserves the articulated remains of an enantiornithine bird; the other preserves the articulated remains of previously unknown species of lizard (named <span className='italic'>Indrasaurus wangi</span>).
      </p>
      <p className="mb-8">
        These specimens together indicate that <span className='italic'>Microraptor</span> was an agile, opportunistic predator that swallowed prey largely whole and head first, similar to most extant carnivorous birds and lizards.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={microraptor}
          alt="A microraptor with a lizard in its stomach"
          width={500}
          height={500}
        />
      </div>

      <HeaderFive text='Abstract' />
      <p className="mb-4">
        Preserved indicators of diet are extremely rare in the fossil record; even more so is unequivocal direct evidence for predator–prey relationships. Here, we report on a unique specimen of the small nonavian theropod <span className='italic'>Microraptor gui</span> from the Early Cretaceous Jehol biota, China, which has the remains of an adult enantiornithine bird preserved in its abdomen, most likely not scavenged, but captured and consumed by the dinosaur. We provide direct evidence for the dietary preferences of <span className='italic'>Microraptor</span> and a nonavian dinosaur feeding on a bird. Further, because Jehol enantiornithines were distinctly arboreal, in contrast to their cursorial ornithurine counterparts, this fossil suggests that <span className='italic'>Microraptor</span> hunted in trees thereby supporting inferences that this taxon was also an arborealist, and provides further support for the arboreality of basal dromaeosaurids.
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
