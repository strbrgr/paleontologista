import Image from 'next/image'
import Link from 'next/link'
import fossilizedOvaries from "@/app/research/fossilized-ovaries/fossilized-ovaries.jpg"
import { HeaderFive, HeaderFour, HeaderSix } from '@/components/ui/typography'

const links = [
  { label: 'Nature', href: 'https://www.nature.com/articles/nature11985' },
  { label: 'Nature', href: 'https://www.nature.com/articles/nature.2013.12616' },
  { label: 'Science', href: 'https://www.science.org/content/article/early-bird-loses-ovary' },
  { label: 'Smithsonian Mag', href: 'https://www.smithsonianmag.com/smart-news/would-you-give-up-an-ovary-for-the-ability-to-fly-birds-might-have-3682152/' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Fossilized ovaries' />
      <p className="mb-4">
        Modern birds (Neornithes) have a reproductive system that is highly modified compared to other amniotes. They are the only amniotes with a single functional ovary and oviduct (although within Aves there are a few exceptions, such as the Kiwi bird).
      </p>
      <p className="mb-8">
        I described nine fossil birds from the Jehol preserving remnants of the ovary. These specimens indicate that the loss of the right ovary occurred very early in avian evolution.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={fossilizedOvaries}
          alt="Fossilized ovaries in an enantiornithine bird"
          width={500}
          height={500}
        />
      </div>

      <HeaderFive text='Summary' />
      <p className="mb-4">
        Direct indicators of diet and predator-prey relationships are exceedingly rare in the fossil record. However, it is through such traces that we can best understand trophic interactions in ancient ecosystems, confirm dietary inferences derived from skeletal morphologies, and clarify behavioral and ecological interpretations. Here, we identify a previously unrecognized lizard species in the abdomen of a specimen of Microraptor zhaoianus, a small, volant dromaeosaurid (Paraves) with asymmetrical flight feathers on both its forelimbs and hindlimbs from the Early Cretaceous Jehol Biota. The lizard is largely complete and articulated, confirming the current perception of Microraptor as an agile opportunistic predator that, like extant reptiles, including raptorial birds, ingested small prey whole and head first. The lizard can be readily distinguished from previously recognized Early Cretaceous species based on its unusual widely spaced and brachydont dentition. Phylogenetic analysis suggests Indrasaurus wangi gen. et sp. nov. is a basal scleroglossan closely related to the slightly older Liushusaurus. Comparison of ingested remains preserved across Paraves suggests that dromaeosaurids retained the plesiomorphic condition in which ingested prey were fully digested, rather than egested, as has been demonstrated was the case in the probable troodontid Anchiornis. This supports a closer relationship between Aves and Anchiornis and suggests that flight did not precipitate the evolution of pellet egestion in Paraves and that the evolution of the “modern avian” digestive system in paravians was highly homoplastic. A preliminary Jehol food web is reconstructed from current data.
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
