import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { SeparatorLine } from "@/components/ui/separator-line";
import Link from "next/link";
import jingmai from "@/app/JingmaiOConnor2019.jpg";
import outreach from "@/app/outreach/img/outreach.jpg";
import dbn from "@/app/field-work/img/dead_bird_nerds_2025.jpg";
import Image from "next/image";
import { researchHighlights } from "@/lib/research-highlights";

export const metadata = {
  title: "Jingmai O'Connor",
  description:
    "Dr. Jingmai O'Connor is a paleontologist studying theropod dinosaurs, the dinosaur-bird transition, and the evolution of bird physiology.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website" as const,
    url: "/",
    title: "Jingmai O'Connor",
    description:
      "Dr. Jingmai O'Connor is a paleontologist studying theropod dinosaurs, the dinosaur-bird transition, and the evolution of bird physiology.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://paleontologista.com/",
  name: "Jingmai O'Connor",
  alternateName: "paleontologista",
};

const expertise: { title: string; description: string }[] = [
  {
    title: "Mesozoic bird phylogeny",
    description:
      "Using cladistics I seek to build the most comprehensive character matrix of fossil birds and their closest relatives in order to better understand the dinosaur-bird transition and the Cretaceous radiation of birds.",
  },
  {
    title: "Flying dinosaurs",
    description:
      "Discoveries in the last decade have revealed that volant behavior has most likely evolved repeatedly in dinosaurs closely related to birds. The how and why that underlie this locomotor revolution represents one of the most exciting aspects of theropod paleontology.",
  },
  {
    title: "Fossil soft tissues",
    description:
      "Fossils preserve more than bones. Fossilized soft tissues reveal important aspects of extinct biology that can’t be gleaned from just the skeleton. Exploring methods to best study these tissues sheds light on unexpected aspects of extinct paravian biology.",
  },
  {
    title: "Science needs to reach out",
    description:
      "In an age of Science denialism and environmental crisis, research must be paired with community outreach. I am passionate about promoting diversity in STEM and igniting scientific interest in peoples of all ages through the exciting stories uncovered from spectacular fossil birds and their closest relatives.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start my-12 ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="flex flex-wrap md:flex-nowrap py-12 gap-12 justify-center md:justify-start mx-auto max-w-7xl px-4">
        <div>
          <Image
            src={jingmai}
            alt="Portrait of Jingmai O'Connor"
            width={375}
            height={500}
            placeholder="blur"
            preload
          />
        </div>
        <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
          <Heading as="h1" size="display">Hi!</Heading>
          <Heading as="h2" size="intro">
            I’m paleontologist Jingmai O'Connor aka paleontologista aka the punk rock paleontologist.
          </Heading>
          <div className="flex flex-col gap-4 rounded-4xl w-fit">
            <Link href="/biography" className={buttonVariants({ variant: "outline" })}>
              Read my full bio
            </Link>
            <Link href="/cv" className={buttonVariants({ variant: "outline" })}>
              Have a look at my CV
            </Link>
            <Link href="/bibliography" className={buttonVariants({ variant: "outline" })}>
              See my bibliography
            </Link>
          </div>

          <SeparatorLine />

          <p className="max-w-lg">
            Using a variety of methods I study theropod dinosaurs with a focus on understanding the
            dinosaur-bird transition and the evolution of modern bird physiology.
          </p>
        </div>
      </div>

      <div className="w-full pt-24 py-12 mx-auto max-w-7xl px-4">
        <Heading as="h2" size="section">Areas of Expertise</Heading>

        <SeparatorLine />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 py-24">
          {expertise.map((e) => {
            return (
              <div key={e.title}>
                <Heading as="h4" size="subsection" text={e.title} className="text-black" />
                <p className="max-w-lg">{e.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-24 w-full bg-background-blue px-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 mx-auto max-w-7xl">
          <Heading as="h4" size="subsection"
            text="Personal notes and thoughts about work I’m passionate about"
            className="text-white max-w-full md:max-w-sm"
          />
          <div className="flex flex-col items-end text-right">
            <Heading as="h2" size="section" className="text-white">Research</Heading>
            <Link
              href="/research-highlights"
              className="text-white justify-self-end hover:underline hover:text-white"
            >
              More Details
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 py-24 justify-items-center md:justify-items-start mx-auto max-w-7xl">
          {researchHighlights.filter((r) => r.featured).map((r) => {
            return (
              <Link
                key={r.title}
                href={`/research-highlights/${r.slug}`}
                className="transform transition-transform duration-200 hover:scale-[1.01]"
              >
                <div className="aspect-[1/1] w-full relative">
                  <Image src={r.image} alt={r.alt} width={500} height={500} placeholder="blur" />
                </div>
                <Heading as="h4" size="subsection" text={r.title} className="text-white mt-8" />
                <p className="max-w-lg text-white mb-8">{r.summary}</p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col mx-auto max-w-7xl mt-24 px-4">
        <div>
          <Heading as="h2" size="section" className="text-left">Outreach</Heading>
          <SeparatorLine />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-12 justify-center md:justify-start mt-12">
          <div>
            <Image
              src={outreach}
              alt="Photo of Jingmai O'Connor doing outreach work in front of a group of children"
              width={375}
              height={500}
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
            <Heading as="h4" size="subsection" text="In order to maximize the impact of scientific research and utilize the power of paleontology as a gateway science, I happily engage in outreach as opportunities arise." />

            <div className="w-fit">
              <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
                Get in touch
              </Link>
            </div>

            <SeparatorLine />

            <p className="max-w-md mt-12">
              My outreach also includes popular science articles, guest blogs (yes blogs!),
              responding to emails from students of all ages (go on, write me!), collections tours,
              and classroom visits.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full pt-48 mx-auto max-w-7xl px-4">
        <Heading as="h2" size="section" className="text-right">Field Work</Heading>
        <SeparatorLine />
        <div className="mt-12">
          <Heading as="h4" size="subsection" text="I have been lucky to participate in Field Work around the world." />
          <Image
            className="mx-auto my-12"
            src={dbn}
            alt="Group photo of Dead Birds Nerds in 2025"
            width={800}
            height={600}
            placeholder="blur"
          />
          <div className="flex justify-center">
            <Link href="/field-work" className={buttonVariants({ variant: "outline" })}>
              More Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
