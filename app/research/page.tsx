import Link from 'next/link'
import { HeaderFour } from '@/components/ui/typography'
import Image, { StaticImageData } from 'next/image'
import archaeopteryx from "@/app/research/chicago-archaeopteryx/chicago_archaeopteryx.jpg"
import baby_enantiornithines from "@/app/research/baby-enantiornithines-had-it-tough/baby_enantiornithines_had_it_tough_square.jpg"
import late_cretaceous from "@/app/research/best-preserved-late-cretaceous-enantiornithine/late_cretaceous_enantiornithine.jpg"
import stomach_crystals from "@/app/research/mystery-of-stomach-crystals/stomach_crystals.jpg"
import sexy_tail from "@/app/research/enantiornithine-with-sexy-tail/enantiornithine_sexy_tail.jpg"

import mabirds from "@/app/research/99-ma-birds-in-amber/99-ma-birds.jpg"
import medullaryBone from "@/app/research/a-controversial-bone-tissue/medullary_bone.jpg"
import fossilizedLungs from "@/app/research/fossilized-lungs/fossilized-lungs.jpg"
import fossilizedOvaries from "@/app/research/fossilized-ovaries/fossilized-ovaries.jpg"
import microraptor from "@/app/research/microraptors-last-meal/microraptor.jpg"
import deathBy from "@/app/research/death-by/death-by.jpg"
import imparavis from "@/app/research/attenboroughs-strange-bird/imparavis_square.jpg"

export const metadata = {
  title: "Research Highlights",
  description: 'Read more about my most recent research.',
}

const researchHighlights: { title: string, image: StaticImageData, alt: string, summary: string, url: string }[] = [{
  title: "Chicago archeopteryx",
  image: archaeopteryx,
  alt: "Alt",
  summary: "The best Archaeopteryx – EVER! Check out info from the first of many papers on this beauty.",
  url: "/chicago-archaeopteryx"
},
{
  title: "Attenborough’s strange bird",
  image: imparavis,
  alt: "Alt",
  summary: "The oldest toothless enantiornithine and the mystery of tooth loss in this clade.",
  url: "/attenboroughs-strange-bird"
},
{
  title: "Baby Enantiornithines had it tough",
  image: baby_enantiornithines,
  alt: "Alt",
  summary: "A small piece of amber preserving immature enantiornithine feathers tells the tale of hardships these babies faced.",
  url: "/baby-enantiornithines-had-it-tough"
},
{
  title: "A mystery of tyrannosaur proportions",
  image: mabirds,
  alt: "Holes in the jaw of SUE the T. rex",
  summary: "Pathology is one of the most difficult things to unravel in an extinct organism.",
  url: "/a-mystery-of-tyrannosaur-proportions"
},
{
  title: "Best preserved Late Cretaceous enantiornithine",
  image: late_cretaceous,
  alt: "A Late Cretaceous enantiornithine skull",
  summary: "Late Cretaceous fossil birds are rare. When found, they are usually very incomplete hindering attempts to understand broad trends in avian evolution across the Cretaceous.",
  url: "/best-preserved-late-cretaceous-enantiornithine"
},
{
  title: "Mystery of the stomach crystals",
  image: stomach_crystals,
  alt: "Silicified soft tissue in the abdomen of an enantiornithine bird",
  summary: "There is almost no evidence of enantiornithine diet in the form of ingested remains. This is strange because thousands of well-preserved specimens have been recovered and such evidence exists for contemporaneous ornithuromorphs known from far fewer specimens. As such, any evidence pertaining to enantiornithine diet and digestive function is important.",
  url: "/mystery-of-stomach-crystals"
},
{
  title: "Enantiornithine with sexy tail",
  image: sexy_tail,
  alt: "Yuanchuavis, an enantiornithine bird",
  summary: "The tail is the most diverse part of a bird’s plumage – this is because while the tail can help in flight, its not essential, and thus free to evolve elaborate sexual ornaments in certain conditions.",
  url: "/enantiornithine-with-sexy-tail"
},
{
  title: "99 Ma birds in amber",
  image: mabirds,
  alt: "An enantiornithine bird leg trapped in amber",
  summary: "Recently our understanding of Cretaceous birds is being expanded by exceptional discoveries of small enantiornithine birds trapped in Cenomanian aged amber from Myanmar. These discoveries include two nearly complete individuals and one isolated hindlimb that represents a new species, Elektorornis chenguangi.",
  url: "/99-ma-birds-in-amber"
},
{
  title: "Fossilized lungs",
  image: fossilizedLungs,
  alt: "Fossilized lungs in an Archaeorhynchus",
  summary: "Fossilized soft tissues are rare – even more rare are traces of internal organs (integument like skin and feathers being relatively more common). In an article published in the Proceedings of the National Academy of Sciences U.S.A., I described a specimen of Archaeorhynchus spathula, a primitive ornithuromorph bird, preserving traces of the lung tissue.",
  url: "/fossilized-lungs"
},
{
  title: "Death by…",
  image: deathBy,
  alt: "Stones in the guts of a Yanornis",
  summary: "When an animal is preserved with evidence that it was rapidly buried by a collapsed sand dune, pyroclastic flow, or turbidite you can pretty safely assume that’s how the animal died.",
  url: "/death-by"
},
{
  title: "A controversial bone tissue",
  image: medullaryBone,
  alt: "Enantiornithine bone tissue preserving medullary bone",
  summary: "Since it was described in a specimen of T. rex, medullary bone has been the center of much attention. Medullary bone is a tissue unique to living female birds and found only during the egg-laying cycle that forms in the medullary cavity (and other spaces) inside bones.",
  url: "/a-controversial-bone-tissue"
},
{
  title: "Fossilized ovaries",
  image: fossilizedOvaries,
  alt: "Fossilized ovaries in an enantiornithine bird",
  summary: "Modern birds (Neornithes) have a reproductive system that is highly modified compared to other amniotes. They are the only amniotes with a single functional ovary and oviduct (although within Aves there are a few exceptions, such as the Kiwi bird).",
  url: "/fossilized-ovaries"
},
{
  title: "Microraptor’s last meal",
  image: microraptor,
  alt: "A microraptor with a lizard in its stomach",
  summary: "I have described two specimens of Microraptor preserving ingested remains. One preserves the articulated remains of an enantiornithine bird; the other preserves the articulated remains of previously unknown species of lizard (named Indrasaurus wangi).",
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
