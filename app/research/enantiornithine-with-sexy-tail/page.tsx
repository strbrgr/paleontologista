import Image from 'next/image'
import Link from 'next/link'
import sexy_tail from "@/app/research/enantiornithine-with-sexy-tail/enantiornithine_sexy_tail.jpg"
import { HeaderFour, HeaderSix } from '@/components/ui/typography'

export const metadata = {
  title: "Enantiornithine with sexy tail",
  description: 'Research Highlight',
}

const links = [
  { label: 'Popular Science', href: 'https://www.popsci.com/science/fossil-bird-giant-feathers/' },
  { label: 'Sci News', href: 'https://www.sci.news/paleontology/yuanchuavis-kompsosoura-10079.html' },
  { label: 'Block Club Chicago', href: 'https://blockclubchicago.org/2021/09/16/newly-discovered-fancy-feathered-fossil-bird-has-a-field-museum-link/' },
  { label: 'LiveScience', href: 'https://www.livescience.com/dinosaur-age-bird-long-tail-feathers' },
  { label: 'martha stewart', href: 'https://www.marthastewart.com/8164967/prehistoric-peacock-discovery-new-study-october-2021' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Enantiornithine with sexy tail' />
      <p className="mb-4">
        The tail is the most diverse part of a bird’s plumage – this is because while the tail can help in flight, its not essential, and thus free to evolve elaborate sexual ornaments in certain conditions.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={sexy_tail}
          alt="Yuanchuavis, an enantiornithine bird"
          width={500}
          height={500}
        />
      </div>

      <p className="mb-8">
        <span className='italic'>Yuanchuavis</span>, a new species of pengornithid enantiornithine, preserves an elaborate tail morphology called a pin-tail, the first evidence of this tail morphology (which has evolved many times in living birds) in this diverse clade of Cretaceous birds. The pin-tail in <span className='italic'>Yuanchuavis</span> consists of a short rectricial fan together with two fully pennaceous rachis-dominated tail feathers (an extinct feather morphotype). These large, elongate feathers are inferred to have been costly (both in terms of initial energetic investment to grow them and the energetic cost associated with flight due to the increase in mass and drag) and thus represent an honest signal of fitness that evolved under sexual selection.
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
