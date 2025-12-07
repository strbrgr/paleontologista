import Image from 'next/image'
import Link from 'next/link'
import anchiornis from "@/app/research/anchiornis-could-not-fly/anchiornis.webp"
import { HeaderFive, HeaderFour } from '@/components/ui/typography'

export const metadata = {
  title: "Anchiornis couldn't fly",
  description: 'Research Highlight',
}

const links = [
  { label: 'Nature', href: 'https://www.nature.com/articles/s42003-025-09019-2' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <HeaderFour text='Anchiornis couldn’t fly' />
      <p className="mb-4">
        I won’t say I told you so… but here’s a bunch of evidence that proves Anchiornis isn’t a bird.
      </p>
      <div className="flex justify-center my-12">
        <Image
          src={anchiornis}
          alt="Image of a anchiornis fossil"
          width={500}
          height={500}
        />
      </div>
      <p className="mb-8">
        Anchiornis was first described in 2009 as a troodontid dinosaur. The second paper (also in 2009), on a better specimen said much the same, even describing the feathered forelimbs as being not obviously adapted for flight. But somewhere along the way someone decided that Anchiornis was a bird older than Archaeopteryx and most people jumped on this bandwagon. People who, I can only surmise, have spent very little time actually looking at the fossils of non-avian and avian pennaraptorans. Most recent analyses find that Anchiornis and its relatives are close relatives of what was previously considered birds (the common ancestor of Archaeopteryx and a sparrow and all its descendants), together forming a group we call Avialae. Most people think Avialae = birds but they are wrong… and our recent paper on the wing of Anchiornis strongly supports this. Although skeletally, Anchiornis is very similar to Archaeopteryx, it has some key differences, lacking a reversed hallux (for perching), a bill tip organ (for feeding on small things like seeds and insects rather than preying on vertebrates; see ‘Food for flight’ post), and it has proportionately smaller feathered ‘wings’ with symmetrical feathers and no tertials (see post about first Archaeopteryx paper). But in this new study describing two really nicely preserved specimens we show a few more features that also point to Anchiornis being a terrestrial dinosaur unable to fly, in contrast to birds (dinosaurs that can fly). The preservation in these specimens preserves the color pattern in the wing covert feathers which allows us to very clearly see the position of the covert rows. There are way more rows than there are in flying birds. They also cover too much of the wing (more than half as opposed to less than half in flying birds). And last but not least, they molted irregularly, whereas in Microraptor and Confuciusornis, the feathers molt in a regular pattern that allows these flying dinosaurs to fly during the molt. This means, if Anchiornis could fly, and that’s a big if, it flew in a way totally different than any other dinosaur that flew with feathers (birds and Microraptor). What really gets me is, how can a dinosaur so closely related to Archaeopteryx and other birds (Aves) have a wing that is so different? It’s different from other non-flying feathered dinosaurs too. So, while we can safely say Anchiornis is not a bird older than Archaeopteryx, we have a new mystery – what was it doing with its unique wing-like arm feathers?
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
