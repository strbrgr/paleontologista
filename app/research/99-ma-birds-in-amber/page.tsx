import Image from 'next/image'
import Link from 'next/link'
import mabirds from '@/app/research/99-ma-birds-in-amber/99-ma-birds.jpg'
import { HeaderFive, HeaderFour, HeaderSix } from '@/components/ui/typography'

const links = [
  { label: 'National Geographic', href: 'https://www.nationalgeographic.com/news/2018/02/dinosaurs-birds-trapped-amber-fossils-paleontology-science' },
  { label: 'National Geographic #2', href: 'https://www.nationalgeographic.com/news/2017/06/baby-bird-dinosaur-burmese-amber-fossil/' },
  { label: 'CNN', href: 'https://www.cnn.com/2019/07/11/world/ancient-bird-foot-lizard-microraptor-scn/index.html' },
  { label: 'Science', href: 'https://www.science.org/content/article/baby-bird-trapped-amber-lived-alongside-dinosaurs' },
  { label: 'Newsweek', href: 'https://www.newsweek.com/99-million-year-old-bird-lived-dinosaurs-found-trapped-ancient-amber-829175' },
  { label: 'Nature', href: 'https://www.nature.com/articles/ncomms12089' },
  { label: 'Nature #2', href: 'https://www.nature.com/articles/s41598-018-37427-4' },
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/abs/pii/S1342937X17300527' },
  { label: 'ScienceDirect #2', href: 'https://www.sciencedirect.com/science/article/abs/pii/S2095927318300331' },
  { label: 'ScienceDirect #3', href: 'https://www.sciencedirect.com/science/article/pii/S0960982219306918' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='99 Ma birds in amber' />
      <p className="mb-4">
        Recently our understanding of Cretaceous birds is being expanded by exceptional discoveries of small
        enantiornithine birds trapped in Cenomanian aged amber from Myanmar. These discoveries include two nearly
        complete individuals and one isolated hindlimb that represents a new species, <i>Elektorornis chenguangi</i>.
      </p>
      <p className="mb-8">
        So far six skeletal specimens have been uncovered, all of which have been described by me.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={mabirds}
          alt="An enantiornithine bird leg trapped in amber"
          width={500}
          height={500}
          placeholder='blur'
          priority={true}
        />
      </div>

      <HeaderFive text='Abstract' />
      <p className="mb-4">
        Our knowledge of Cretaceous plumage is limited by the fossil record itself: compression fossils surrounding
        skeletons lack the finest morphological details and seldom preserve visible traces of colour, while discoveries
        in amber have been disassociated from their source animals. Here we report the osteology, plumage and pterylosis
        of two exceptionally preserved theropod wings from Burmese amber, with vestiges of soft tissues. The extremely
        small size and osteological development of the wings, combined with their digit proportions, strongly suggests
        that the remains represent precocial hatchlings of enantiornithine birds. These specimens demonstrate that the
        plumage types associated with modern birds were present within single individuals of Enantiornithes by the
        Cenomanian (99 million years ago), providing insights into plumage arrangement and microstructure alongside
        immature skeletal remains. This finding brings new detail to our understanding of infrequently preserved
        juveniles, including the first concrete examples of follicles, feather tracts and apteria in Cretaceous avialans.
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

