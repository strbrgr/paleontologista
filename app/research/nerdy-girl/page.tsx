import Image from 'next/image'
import Link from 'next/link'
import chromeo from "@/app/research/nerdy-girl/chromeo.webp"
import { HeaderFive, HeaderFour } from '@/components/ui/typography'

export const metadata = {
  title: "Nerdy girl by Chromeo(rnis)",
  description: 'Research Highlight',
}

const links = [
  { label: 'Palaeo Electronica', href: 'https://palaeo-electronica.org/content/blog/5742-jehol-bird' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Nerdy girl by Chromeo(rnis)' />
      <p className="mb-4">
        A new species of enantiornithine closely related to Longipteryx and named in honor of the Chromeo Funklordz.
      </p>
      <div className="flex justify-center my-12">
        <Image
          src={chromeo}
          alt="Image of Jingmai O'Connor and Chromeo"
          width={500}
          height={500}
        />
      </div>
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
