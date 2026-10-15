import Image from 'next/image'
import Link from 'next/link'
import imparavis from '@/app/research-highlights/attenboroughs-strange-bird/imparavis_vertical.jpg'
import { HeaderFour, HeaderSix } from '@/components/ui/typography'

export const metadata = {
  title: "Attenboroughs strange bird",
  description: 'Research Highlight',
}
const links = [
  { label: 'ScienceDirect', href: 'https://www.sciencedirect.com/science/article/abs/pii/S0195667124000405' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Attenborough’s strange bird' />
      <div className="flex justify-center my-12">
        <Image
          src={imparavis}
          alt="Image of a enantiornithine fossil"
          width={375}
          height={500}
          placeholder='blur'
          priority={true}
        />
      </div>
      <p className="mb-4">
        Alex Clark recently led a project describing a new species of enantiornithine, <span className='italic'>Imparavis attenboroughi</span>. This is the first toothless enantiornithine described from the Jehol avifauna, pushing back the record of tooth loss in this clade by 50 million years! Previously, tooth loss in dinosaurs (including birds) was strongly linked to herbivory, in particular the replacement of teeth with the gastric mill. The absence of gastroliths in all enantiornithines suggests that tooth loss in this clade was driven by other selective pressures.
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

