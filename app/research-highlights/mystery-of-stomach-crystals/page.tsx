import Image from 'next/image'
import Link from 'next/link'
import stomach_crystals from "@/app/research-highlights/mystery-of-stomach-crystals/stomach_crystals.jpg"
import { Heading } from "@/components/ui/typography";

export const metadata = {
  title: "Mystery of stomach crystals",
  description: 'Research Highlight',
}

const links = [
  { label: 'SciTechDaily', href: 'https://scitechdaily.com/crystals-discovered-in-the-stomach-of-fossil-bird-complicates-the-mystery-of-its-diet/' },
  { label: 'Science Daily', href: 'https://www.sciencedaily.com/releases/2021/02/210219083848.htm' },
  { label: 'Popular Science', href: 'https://www.popsci.com/story/science/fossil-bird-stomach-contents/' },
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/pii/S0960982219307134?via%3Dihub' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <Heading as="h4" size="subsection" text='Mystery of the stomach crystals' />
      <p className="mb-4">
        There is almost no evidence of enantiornithine diet in the form of ingested remains. This is strange because thousands of well-preserved specimens have been recovered and such evidence exists for contemporaneous ornithuromorphs known from far fewer specimens. As such, any evidence pertaining to enantiornithine diet and digestive function is important.
      </p>
      <div className="flex justify-center my-12">
        <Image
          src={stomach_crystals}
          alt="Silicified soft tissue in the abdomen of an enantiornithine bird"
          width={500}
          height={500}
        />
      </div>
      <p className="mb-8">
        A referred specimen of <span className='italic'>Bohaiornis</span> was described as preserving ingested stones interpreted as rangle (stones ingested by predatory birds to clean their digestive tract)(Li et al., 2014). However, these traces were alternately interpreted as not gastroliths at all (O’Connor 2019). In order to solve this mystery, IVPP Master’s student LIU Shumin extracted a sample of the purported gastroliths and analyzed them using a number of methods. The results showed that these mysterious traces are not gastroliths, although what they are exactly remains a mystery.
      </p>

      <Heading as="h6" size="small" text='Read more' />
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
