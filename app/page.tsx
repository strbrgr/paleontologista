import { Button } from "@/components/ui/button";
import { HeaderOne, HeaderTwo, HeaderThree, HeaderFour } from "@/components/ui/typography";
import { SeparatorLine } from "@/components/ui/separator-line";
import Link from "next/link";
import jingmai from "../public/img/JingmaiOConnor2019.jpg"
import Image from "next/image";
import { getFirstThreeResearchHighlights } from "./utils";
import { getImageFromKey } from "./research-highlights/image-map";

const expertise: { title: string; description: string }[] = [{
  title: "Mesozoic bird phylogeny",
  description: "Using cladistics I seek to build the most comprehensive character matrix of fossil birds and their closest relatives in order to better understand the dinosaur-bird transition and the Cretaceous radiation of birds.",
}, {
  title: "Flying dinosaurs",
  description: "Discoveries in the last decade have revealed that volant behavior has most likely evolved repeatedly in dinosaurs closely related to birds. The how and why that underlie this locomotor revolution represents one of the most exciting aspects of theropod paleontology."
}, {
  title: "Fossil soft tissues",
  description: "Through the study and analysis of observable Fossils preserve more than bones. Fossilized soft tissues reveal important aspects of extinct biology that can’t be gleaned from just the skeleton. Exploring methods to best study these tissues sheds light on unexpected aspects of extinct paravian biology."
}, {
  title: "Science needs to reach out",
  description: "In an age of Science denialism and environmental crisis, research must be paired with community outreach. I am passionate about promoting diversity in STEM and igniting scientific interest in peoples of all ages through the exciting stories uncovered from spectacular fossil birds and their closest relatives."
}]

export default function Page() {
  const researchHighlights = getFirstThreeResearchHighlights();
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start my-8">
      <div className="flex flex-wrap md:flex-nowrap p-6 sm:p-10 md:p-20 gap-12 justify-center md:justify-start">
        <div className="relative w-[375px] h-[500px] shrink-0">
          <Image src={jingmai} alt="Portrait of Jingmai O'Connor" width={375} height={500} placeholder="blur" priority={true} />
        </div>
        <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
          <HeaderOne text="Hi!" />
          <HeaderThree text="I’m paleontologist Jingmai O'Connor aka paleontologista aka the punk rock paleontologist." />
          <div className="flex flex-col gap-4 rounded-4xl w-fit">
            <Button asChild variant="outline">
              <Link href="/bio">Read my full bio</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/cv">Have a look at my CV</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/bibliography">See my bibliography</Link>
            </Button>
          </div>

          <SeparatorLine />

          <p className="max-w-lg">Using a variety of methods I study theropod dinosaurs with a focus on understanding the dinosaur-bird transition and the evolution of modern bird physiology.</p>
        </div>
      </div>

      <div className="w-full pt-24 px-4 sm:px-6 md:px-12 lg:p-20">
        <HeaderTwo text="Areas of Expertise" />

        <SeparatorLine />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 py-24">
          {expertise.map(e => {
            return (
              <div key={e.title}>
                <HeaderFour text={e.title} className="text-black" />
                <p className="max-w-lg">{e.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="pt-48 w-full bg-background-blue px-4 sm:px-6 md:px-12 lg:p-20">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <HeaderFour
            text="Personal notes and thoughts about work I’m passionate about"
            className="text-white max-w-full md:max-w-sm"
          />
          <div className="flex flex-col items-end text-right">
            <HeaderTwo text="Research" className="text-white" />
            <Link
              href="research-highlights"
              className="text-white justify-self-end hover:underline hover:text-white"
            >
              More Details
            </Link>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 py-24 justify-items-center md:justify-items-start">
          {researchHighlights.map((r) => {
            return (
              <div key={r.metadata.title}>
                <div className="aspect-[1/1] w-full relative">
                  <Image
                    src={getImageFromKey(r.metadata.staticImportLookupKey)}
                    alt={r.metadata.imageAlt}
                    width={500}
                    height={500}
                    placeholder="blur"
                  />
                </div>
                <HeaderFour text={r.metadata.title} className="text-white mt-8" />
                <p className="max-w-lg text-white mb-8">{r.metadata.summary}</p>
                <Link
                  href={`research-highlights/${r.slug}`}
                  className="text-white justify-self-end hover:underline hover:text-white"
                >
                  Read More
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-full pt-24 px-4 sm:px-6 md:px-12 lg:p-20">
        <HeaderTwo text="Outreach" />
        <SeparatorLine />

      </div>

      <div className="w-full pt-24 px-4 sm:px-6 md:px-12 lg:p-20">
        <HeaderTwo text="Field Work" className="text-right" />
        <SeparatorLine />

      </div>
    </div >
  );
}
