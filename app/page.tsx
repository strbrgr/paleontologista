import { Button } from "@/components/ui/button";
import { HeaderOne, HeaderTwo, HeaderThree, HeaderFour } from "@/components/ui/typography";
import { CustomImage, ImageType } from "@/components/ui/image";
import { SeparatorLine } from "@/components/ui/separator-line";
import Link from "next/link";

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

const research: { title: string; href: string; description: string }[] = [
  {
    title: "A mystery of tyrannosaur proportions",
    href: "/",
    description:
      "Pathology is one of the most difficult things to unravel in an extinct organism."
  },
  {
    title: "Best preserved Late Cretaceous enantiornithine",
    href: "/",
    description:
      "Late Cretaceous fossil birds are rare. When found, they are usually very incomplete hindering attempts to understand broad trends in avian evolution across the Cretaceous."
  },
  {
    title: "Mystery of the stomach crystals",
    href: "/",
    description:
      "There is almost no evidence of enantiornithine diet in the form of ingested remains. This is strange because thousands of well-preserved specimens have been recovered and such evidence exists for contemporaneous ornithuromorphs known from far fewer specimens. As such, any evidence pertaining to enantiornithine diet and digestive function is important."
  },
]

export default function Page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start my-8">
      <div className="flex flex-col md:flex-row p-6 sm:p-10 md:p-20 gap-12">
        <div className="relative">
          <CustomImage src={`/img/JingmaiOConnor2019.jpg`} blurDataUrl={`/img/JingmaiOConnor2019_blur.jpg`} alt="Portrait of Jingmai O'Connor" type={ImageType.Vertical} priority={true} />

        </div>
        <div className="flex flex-col gap-4 flex-1">
          <HeaderOne text="Hi!" />
          <HeaderThree text="I’m paleontologist Jingmai O'Connor
            aka paleontologista aka the punk rock paleontologist." />
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

      <div className="pt-48 w-full p-20">
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

      <div className="pt-48 w-full bg-background-blue p-20">
        <div className="flex flex-row justify-between">
          <HeaderFour text="
          Personal notes and thoughts about work I’m passionate about" className="text-white" />
          <div>
            <HeaderTwo text="Research" className="text-white" />
            <Link href="research-highlights" className="text-white justify-self-end hover:underline hover:text-white ">More Details</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-18 py-24">
          {research.map((r) => {
            return (
              <div key={r.title}>
                <HeaderFour text={r.title} className="text-white" />
                <p className="max-w-lg text-white mb-8">{r.description}</p>
                <Link href="research-highlights" className="text-white justify-self-end hover:underline hover:text-white">Read More</Link>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
}
