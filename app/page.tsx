import { Button } from "@/components/ui/button";
import Image from "next/image";
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

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start my-8">
        <div className="flex flex-col md:flex-row p-6 sm:p-10 md:p-20 gap-12">
          <div className="relative">
            <Image src={`/img/JingmaiOConnor2019.jpg`} alt="Portrait of Jingmai O'Connor" width={400} height={600} />

          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Hi!</h1>
            <h3 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
              I’m paleontologist Jingmai O’Connor
              aka paleontologista aka the punk rock paleontologist.</h3>
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

            <div className="h-[0.5px] bg-border bg-conic-210 w-full fill-lime-200 mt-12">
            </div>

            <p className="max-w-lg">Using a variety of methods I study theropod dinosaurs with a focus on understanding the dinosaur-bird transition and the evolution of modern bird physiology.</p>
          </div>
        </div>

        <div className="pt-48 w-full p-20">
          <h2 className="mb-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Areas of Expertise</h2>

          <div className="h-[0.5px] bg-border bg-conic-210 w-full mt-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-18 py-24">
            {expertise.map(e => {
              return (
                <div key={e.title}>
                  <h4 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                    {e.title}</h4>
                  <p className="max-w-lg">{e.description}</p>
                </div>
              )
            })}
          </div>
        </div>


        <div className="pt-48 w-full bg-background-blue p-20">
          <div className="flex flex-row justify-between">
            <h4 className="text-white mb-2 max-w-md text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight dark:text-white">
              Personal notes and thoughts about work I’m passionate about
            </h4>

            <div>
              <h2 className="text-white mb-3 text-right text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight dark:text-white">Research</h2>
              <Link href="research-highlights" className="text-white justify-self-end hover:underline hover:text-white ">More Details</Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-18 py-24">
            {research.map((r) => {
              return (
                <div key={r.title}>
                  <h4 className="text-white mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight dark:text-white">
                    {r.title}</h4>
                  <p className="max-w-lg text-white mb-8">{r.description}</p>
                  <Link href="research-highlights" className="text-white justify-self-end hover:underline hover:text-white">More Details</Link>
                </div>

              )
            })}
          </div>
        </div>
      </main >
    </div >
  );
}
