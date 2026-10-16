import Image from "next/image";
import Link from "next/link";
import archeopteryx_horizontal from "@/app/research-highlights/food-for-flight/archeopteryx-horizontal.webp";
import { Heading } from "@/components/ui/typography";

export const metadata = {
  title: "Feather found in fossil feces",
  description: "Research Highlight",
};

const links = [
  {
    label: "The Innovation",
    href: "https://www.cell.com/the-innovation/fulltext/S2666-6758(25)00289-9",
  },
];

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-10 md:px-0">
      <Heading as="h4" size="subsection" text="Feather found in fossil feces" />
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
        The Hell Creek Formation is one of the most studied dinosaur-bearing rock units in the
        world. Paleontologists have combed over these deposits on an annual basis for more than a
        century. No fossilized feathers have ever been found… until now. Paleontologist Dave DeMar
        Jr from the Burke Museum picked up an unusual nodule and the rest is history. The nodule
        turned out to be part of feces left by a theropod dinosaur and the feathers inside are
        suspected to belong to hesperornithiform bird. These birds have been known since 1872 but
        their feathers have never been seen until now. Hesperornithiforms are secondarily
        flightless, subaqueous foragers… And their feathers show it! We see the same adaptations for
        life under the water, like increased barb density, as in modern swimming birds. However, the
        body feathers are very different, resembling the primitive feathers of early dinosaurs that
        also present in some early birds (like enantiornithines, link to baby enantiornithines had
        it tough). These feathers are simple suggesting they were less effective at trapping air,
        which is how feathers keep the body warm. The mass extinction that wiped out all dinosaurs
        including many lineages of birds was triggered by an asteroid that caused an impact winter.
        Particulates blocked out the sun causing rapid cooling and collapse of the food chain. In
        these conditions, feathers that are better for insulation, like we see in modern birds, may
        have been one of the major factors that resulted in some birds surviving and others, like
        hesperornithiforms, going extinct.
      </p>

      <Heading as="h6" size="small" text="Read more" />
      <ul className="list-disc list-inside space-y-1">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
