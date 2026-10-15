import Image from 'next/image'
import Link from 'next/link'
import baby_enantiornithine from "@/app/research-highlights/baby-enantiornithines-had-it-tough/baby_enantiornithines_had_it_tough_vertical.jpg"
import { HeaderFive, HeaderFour } from '@/components/ui/typography'

export const metadata = {
  title: "Baby enantiornithines had it tough",
  description: 'Research Highlight',
}

const links = [
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0195667123001003#:~:text=A%20new%20specimen%20of%20Cenomanian,portions%20encased%20in%20keratinous%20sheaths' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Baby enantiornithines had it tough! (and maybe that’s why they died)' />
      <div className="flex justify-center my-12">
        <Image
          src={baby_enantiornithine}
          alt="Image of amber preserving enantiornithine feathers"
          width={375}
          height={500}
        />
      </div>
      <p className="mb-4">
        A little piece of amber preserving a cluster of immature feathers has led to the hypothesis that rapid molting in enantiornithines may have been an important factor in their extinction. High energetic demands are associated with extinction vulnerability. Baby enantiornithines are hypothesized to be highly precocial, hatching flight ready with no parental care. This means heavy caloric demands for keeping warm, locomotion (flight), foraging, and growing. As birds grow, they need to replace their plumage (molt) to keep up with increases in body size. The faster the molt, the more energy that is required. All evidence indicates that baby enantiornithines molted their feathers very fast, adding to their energy requirements. This wasn’t a problem for 90 million years but when the meteor hit Earth 66 million years ago it caused an impact winter with lower global temperatures and little to no primary productivity (meaning little to no available food). In this changed environment, molting fast (and thus needing more energy to stay warm) and being highly precocial may have worked against this group, causing their extinction.
      </p>
      <HeaderFive text='Read more' />
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
