import Image from 'next/image'
import Link from 'next/link'
import archeopteryx_horizontal from "@/app/research-highlights/food-for-flight/archeopteryx-horizontal.webp"
import { Heading } from "@/components/ui/typography";

export const metadata = {
  title: "Food for flight",
  description: 'Research Highlight',
}

const links = [
  { label: 'The Innovation', href: 'https://www.cell.com/the-innovation/fulltext/S2666-6758(25)00289-9' },
]

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <Heading as="h4" size="subsection" text='Food for flight' />
      <p className="mb-4">
        New features from the Chicago specimen show how Archaeopteryx fed fast for flying.
      </p>

      <div className="flex justify-center my-12">
        <Image
          src={archeopteryx_horizontal}
          alt="Closeup of the Chicago Archaeopteryx"
          width={800}
          height={600}
        />
      </div>

      <p className="mb-4">
        As the oldest and most basal known species of fossil bird, Archaeopteryx has been central to studies concerning avian origins, the evolution of dinosaurian flight, and the transition from terrestrial predator to volant bird that occurred within small feathered theropod dinosaurs we call pennaraptorans. Most studies have focused on the primitive aspects of the Archaeopteryx skull: its full mouth of teeth and akinetic skull. But if Archaeopteryx is the oldest dinosaur to use feathers to fly, and flight is the most physically demanding form of locomotion – meaning it takes more energy to fly than another other way of getting around – then Archaeopteryx should have features related to either more efficient feeding or digestion that are absent in closely related non-flying dinosaurs (like Anchiornis). Preservation of the digestive track is pretty much limited to fossilized remains of ingested items (food, gastroliths) that can give clues as to the structure of the digestive system. Unfortunately, no such clues are preserved in any of the 14 specimens of Archaeopteryx described to date. However, the skull of the Chicago Archaeopteryx is marvelously well preserved and reveals three new features of the rostrum that are widespread in living (and Mesozoic) birds, but absent in terrestrial (non-volant) dinosaurs, and are all related to more efficient feeding: a bill-tip organ, an ossified basihyal, and oral papillae. The latter are soft tissue features that have never been previously reported in the fossil record and thus are unlikely to be a useful character for diagnosing what it means to be a bird. However, a bill tip organ and ossified basihyal appear to be local synapomorphies of Aves (meaning, if they exist elsewhere – like the basihyal in Microraptor, it likely represents independent evolution related to the independent appearance of flight in this taxon). Thus, these features elucidate the once elusive physical differences between Archaeopteryx and closely related non-avian dinosaurs and reveals features Archaeopteryx shares with living birds. Oral papillae help hold food in place while it is manipulated into position by the mobile tongue, which in turn is signaled by the presence of an ossified basihyal (the ossification of this midline tongue bone allows for the evolution of more complex tongue musculature which in turn allows greater tongue mobility). The bill-tip organ provides increased sensory discrimination that allows birds to engage in a diversity of oral tasks related to feeding. Armed with these three new features, early birds like Archaeopteryx were able to feed more efficiently, especially targeting small but rich food items like seeds and insects, and meet the greater energetic demands associated with the evolutionary appearance of powered flight.
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
