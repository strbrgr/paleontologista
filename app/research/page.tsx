import Link from 'next/link'
import { HeaderFour } from '@/components/ui/typography'
import Image, { StaticImageData } from 'next/image'
import mabirds from "./99-ma-birds-in-amber/99-ma-birds.jpg"
import medullaryBone from "./a-controversial-bone-tissue/medullary_bone.jpg"
import fossilizedLungs from "./fossilized-lungs/fossilized-lungs.jpg"
import fossilizedOvaries from "./fossilized-ovaries/fossilized-ovaries.jpg"
import microraptor from "./microraptors-last-meal/microraptor.jpg"
import deathBy from "./death-by/death-by.jpg"
import imparavis from "./attenboroughs-strange-bird/imparavis_square.jpg"

export const metadata = {
  title: "Research Highlights",
  description: 'Read more about my most recent research.',
}

const researchHighlights: { title: string, image: StaticImageData, alt: string, summary: string, url: string }[] = [{
  title: "Chicago archeopteryx",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/chicago-archeopteryx"
},
{
  title: "Attenborough’s strange bird",
  image: imparavis,
  alt: "Alt",
  summary: "A summary",
  url: "/attenboroughs-strange-bird"
},
{
  title: "Enantiornithines had it tough",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/baby-enantiornithines-had-it-tough"
},
{
  title: "A mystery of tyrannosaur proportions",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/a-mystery-of-tyrannosaur-proportions"
},
{
  title: "Best preserved Late Cretaceous enantiornithine",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/best-preserved-late-cretaceous-enantiornithine"
},
{
  title: "Mystery of the stomach crystals",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/mystery-of-stomach-crystals"
},
{
  title: "Enantiornithine with sexy tail",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/enantiornithine-with-sexy-tail"
},
{
  title: "99 Ma birds in amber",
  image: mabirds,
  alt: "Alt",
  summary: "A summary",
  url: "/99-ma-birds-in-amber"
},
{
  title: "Fossilized lungs",
  image: fossilizedLungs,
  alt: "Alt",
  summary: "A summary",
  url: "/fossilized-lungs"
},
{
  title: "Death by…",
  image: deathBy,
  alt: "Alt",
  summary: "A summary",
  url: "/death-by"
},
{
  title: "A controversial bone tissue",
  image: medullaryBone,
  alt: "Alt",
  summary: "A summary",
  url: "/a-controversial-bone-tissue"
},
{
  title: "Fossilized ovaries",
  image: fossilizedOvaries,
  alt: "Alt",
  summary: "A summary",
  url: "/fossilized-ovaries"
},
{
  title: "Microraptor’s last meal",
  image: microraptor,
  alt: "Alt",
  summary: "A summary",
  url: "/microraptors-last-meal"
},
]

export default function Page() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {researchHighlights
        .map((post, idx) => (
          <Link
            key={idx}
            className="flex flex-col max-w-sm h-full transform transition-transform duration-200 hover:scale-[1.01]"
            href={`/research/${post.url}`}
          >
            <div className="aspect-[1/1] w-full relative">
              <Image
                src={post.image}
                alt={post.alt}
                width={500}
                height={500}
                placeholder="blur"
                priority={idx < 3}
              />
            </div>
            <div className="flex flex-col flex-grow mt-4">
              <HeaderFour text={post.title} />
              <p className='flex-grow'>{post.summary}</p>
            </div>
          </Link>
        ))}
    </section>
  )
}
