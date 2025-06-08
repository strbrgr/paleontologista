import Image from 'next/image'
import Link from 'next/link'
import late_cretaceous from "@/app/research/best-preserved-late-cretaceous-enantiornithine/late_cretaceous_enantiornithine.jpg"
import { HeaderFive, HeaderFour } from '@/components/ui/typography'

const links = [
  { label: 'cnrs', href: 'https://www.paris-centre.cnrs.fr/fr/cnrsinfo/yuornis-junchangi-le-squelette-de-lenantiornithe-le-plus-complet-trouve-ce-jour' },
  { label: 'weixin', href: 'https://mp.weixin.qq.com/s/t6pYelq1qY0KpcHtf2YPUA' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Best preserved Late Cretaceous enantiornithine' />
      <p className="mb-4">
        Late Cretaceous fossil birds are rare. When found, they are usually very incomplete hindering attempts to understand broad trends in avian evolution across the Cretaceous.
      </p>
      <div className="flex justify-center my-12">
        <Image
          src={late_cretaceous}
          alt="A Late Cretaceous enantiornithine skull"
          width={500}
          height={500}
        />
      </div>

      <HeaderFive text='The best-preserved Late Cretaceous enantiornithine known to date.' />
      <p className="mb-4">
        The holotype of <span className='italic'>Yuornis</span> represents the best-preserved Late Cretaceous enantiornithine known to date. The specimen consists of a complete 3D skull together with a partial postcranial skeleton. While the postcranial skeleton reveals features typical of enantiornithines and very different than in modern birds, the skull reveals that by the Late Cretaceous enantiornithines had evolved a number of features in parallel to modern birds such as the reduction of the lacrimal, loss of the postorbital, and an edentulous rostrum.
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
