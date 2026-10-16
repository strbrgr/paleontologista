import Image from 'next/image'
import Link from 'next/link'
import medullaryBone from "@/app/research-highlights/a-controversial-bone-tissue/medullary_bone.jpg"
import { Heading } from "@/components/ui/typography";

export const metadata = {
  title: "A controversial bone tissue",
  description: 'Research Highlight',
}

const links = [
  { label: 'Nature', href: 'https://www.nature.com/articles/s41467-018-07621-z' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <Heading as="h4" size="subsection" text='A controversial bone tissue' />
      <p className="mb-4">
        Since it was described in a specimen of <span className='italic'>T. rex</span>, medullary bone has been the center of much attention. Medullary bone is a tissue unique to living female birds and found only during the egg-laying cycle that forms in the medullary cavity (and other spaces) inside bones.
      </p>
      <p className="mb-8">
        Following the first description in <span className='italic'>T. rex</span>, many dinosaurs and even pterosaurs were described with medullary bone. However, at this time Science is unable to distinguish fossil medullary bone from other types of bone tissue with similar morphologies such as pathological bone growths. The best argument for medullary bone in Mesozoic fossils comes from two enantiornithines from China, the specimen shown here and the holotype of <span className='italic'>Avimaia</span>
        (see <Link href="/research-highlights/death-by" className='underline'>
          Death by...
        </Link>
        ). My team and I at the IVPP are currently working on developing techniques to help us distinguish fossil pathologies from true medullary bone.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={medullaryBone}
          alt="Enantiornithine bone tissue preserving medullary bone"
          width={500}
          height={500}
        />
      </div>

      <Heading as="h5" size="label" text='Abstract' />
      <p className="mb-4">
        Medullary bone is an ephemeral type of bone tissue, today found only in sexually mature female birds, that provides a calcium reservoir for eggshell formation. The presence of medullary bone-like tissues in extant birds, pterosaurs, and dinosaurs distantly related to birds shows that caution must be exercised before concluding that fossils bear medullary bone. Here we describe a new specimen of pengornithid enantiornithine from the Lower Cretaceous Jiufotang Formation. Consisting of an isolated left hindlimb, the three-dimensional preservation contrasts with the crushed preservation characteristic of most Jehol specimens. Histological examinations suggest this resulted from the presence of a thick layer of highly vascular bone spanning the medullary cavities of the femur and tibiotarsus, consistent with expectations for medullary bone in extant birds. Micro-computed tomographic scans reveal small amounts of the same tissue extending into the pedal phalanges. We consider the tissue to be homologous to the medullary bone of Neornithines.
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
