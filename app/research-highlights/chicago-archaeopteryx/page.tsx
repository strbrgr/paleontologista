import Image from 'next/image'
import Link from 'next/link'
import archaeopteryx from "@/app/research-highlights/chicago-archaeopteryx/chicago_archaeopteryx.jpg"
import { Heading } from "@/components/ui/typography";

export const metadata = {
  title: "Chicago Archaeopteryx",
  description: 'Research Highlight',
}

const links = [
  { label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-08912-4' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <Heading as="h4" size="subsection" text='Chicago Archaeopteryx' />
      <div className="flex justify-center my-12">
        <Image
          src={archaeopteryx}
          alt="Image of the Chicago archaeopteryx fossil"
          width={500}
          height={500}
        />
      </div>
      <p className="mb-4">
        In 2022 the Field Museum acquired the Chicago <span className='italic'>Archaeopteryx</span>, the best preserved exemplar of the Icon of Evolution. In our first paper, we describe how tertials helped dinosaurs adapt their wing-like arrangements of feathers on the forelimbs into wings capable of generating lift. We also describe the preservation of soft tissues on the right hand and foot that suggest <span className='italic'>Archaeopteryx</span> could use its hands to climb, while its foot pads were primarily adapted for walking on the ground. This specimen also boasts the best known skull including an articulated palate and the first complete vertebral column, showing a tail longer than previously known.
      </p>
      <Heading as="h5" size="label" text='Read more' />
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
