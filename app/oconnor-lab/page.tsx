import peichen from "@/app/oconnor-lab/img/dbn_peichen.jpg";
import alexander from "@/app/oconnor-lab/img/dbn_alexander.jpg";
import isaiah from "@/app/oconnor-lab/img/dbn_isaiah.jpg";
import yosef from "@/app/oconnor-lab/img/past_lab_yosef.jpg";
import matteo from "@/app/oconnor-lab/img/past_lab_matteo.jpg";
import dbn_logo from "@/app/oconnor-lab/img/dead_bird_nerds_logo.jpg";
import Image, { StaticImageData } from "next/image";
import { Heading } from "@/components/ui/typography";
import Layout from "@/components/ui/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O'Connor Lab",
  description: 'Information about my Lab group the "Dead Bird Nerds".',
};

const labMembers: {
  name: string;
  image: StaticImageData;
  research: string;
  website: string | null;
  otherLink: string | null;
}[] = [
    {
      name: "Alexander D. Clark (PhD candidate, University of Chicago)",
      image: alexander,
      research:
        "I am primarily interested in comparative and functional anatomy with a particular focus in both extant and extinct birds. I have worked as a wildlife biologist (6+ years of field work, and an MSc in wildlife biology) in a number of environments researching bird ecology and behavior, and hope to apply what I’ve learned in my paleontological work. I am really excited to try and figure out Mesozoic bird behaviors, diets, and ecologies using neontological comparative and functional anatomical approaches. My current studies focus on using osteological correlates of Mesozoic birds to piece together the ways they may have moved and flown. Additionally, I hope to look deeper into the preserved plumages of Mesozoic birds and assess what primary pressures resulted in such similar display structures as some birds today.",
      website: "https://www.alexanderclarkresearch.com",
      otherLink:
        "https://scholar.google.com/citations?hl=en&oi=ao&user=SEcXEdQAAAAJ",
    },
    {
      name: "Isaiah McKinney (PhD student, University of Chicago)",
      image: isaiah,
      research:
        "Isaiah is a Ph.D. student exploring how avians radiate and diversify following the extinction of the non-avian dinosaurs through various morphological characteristics across the Cretaceous-Paleogene boundary, relying heavily on the Green River Formation avifauna.",
      website: null,
      otherLink: null,
    },
  ];

const pastLabMembers: {
  name: string;
  image: StaticImageData;
  research: string;
  website: string | null;
  otherLink: string | null;
}[] = [
    {
      name: "Pei-Chen Kuo (postdoctoral researcher, Field Museum)",
      image: peichen,
      research:
        "My research interests mainly concern vertebrate macroevolution. I am interested in the topic of mass extinctions and investigating the extent to which distinctive anatomical and ecological characteristics may have impacted survivorship probabilities. For my PhD, I investigated the evolution of morphology in the avian feeding apparatus, employing geometric analyses to incorporate living and fossil birds into a single evolutionary framework. In my current works, I have focused on the study of morphology of Mesozoic avian groups in China and Cenozoic extinct bird clades from Green River Formation. Beyond my research interests, I love to play badminton and vide games with my friends.",
      website: null,
      otherLink: "https://www.researchgate.net/profile/Pei-Chen-Kuo-2",
    },
    {
      name: "Yosef Kiat (postdoctoral researcher)",
      image: yosef,
      research:
        "My interest in zoology started when I was a primary school boy who enjoyed going out to the field to watch and track animals ranging from arthropods to reptiles to bats to fish. Later, when I started my high school studies, I started bird watching, a hobby that led me to become a volunteer at the Jerusalem Birds Observatory (JBO) and to start my first scientific study, which dealt with the diet of owls. Thanks to the guidance of JBO staff, as well as researchers from Tel-Aviv University, this early study produced two research papers. At the same time, I made my first steps towards becoming a bird-ringer at the JBO. I got my basic bird-ringing license in autumn 2004 and quickly started trapping and marking birds at several sites across Israel. Since 2004, I have ringed more than 150,000 birds and gained a lot of experience running fieldwork. In 2010, I started working as the coordinator of the Israeli Bird Ringing Center (IBRC) of the Society for the Protection of Nature in Israel (SPNI), and later became its manager. I received BSc from the Open University, MSc from the Hebrew University of Jerusalem and PhD from the University of Haifa.",
      website: "https://yosef-kiat.weebly.com/",
      otherLink: null,
    },
    {
      name: "Matteo Fabbri (postdoctoral researcher)",
      image: matteo,
      research:
        "Matteo is an Evolutionary Biologist using an Evo-Devo approach to untangle the evolution of phenotypes among amniotes. While the study of the fossil record is fundamental to track the tempo and mode of morphological divergence in deep time leading to modern diversity, Matteo uses neontological data and developmental biology to infer mechanistic patterns driving phenotypical innovation.",
      website: null,
      otherLink: null,
    },
  ];

export default function Page() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto">
        <Image
          className="mx-auto"
          src={dbn_logo}
          alt="Dead Bird Nerds Logo"
          width={500}
          height={500}
          placeholder="blur"
          priority={true}
        />
        <div className="my-12">
          <p>
            The O’Connor research group focuses on archosaur evolution with a
            specialization on the origin and evolution of flight and birds.
          </p>
          <p>
            We are an international group and aim to provide training and
            opportunities to ensure success no matter the background of the
            individual. Paleontology is for everyone!
          </p>
          <p>
            Paid internship opportunities for undergraduate students are
            available through various programs at the{" "}
            <a
              className="underline"
              href="https://www.fieldmuseum.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Field Museum
            </a>
            . For additional opportunities email{" "}
            <a href="mailto:jingmai@fieldmuseum.org" className="underline">
              jingmai@fieldmuseum.org
            </a>
            .
          </p>
        </div>

        <Heading as="h4" size="subsection" text="Current Members" />
        {labMembers.map((m, idx) => {
          return (
            <div key={idx} className="mb-12">
              <Heading as="h5" size="label" text={m.name} />
              <div className="flex justify-center my-4">
                <Image
                  src={m.image}
                  alt={`Photo of lab member ${m.name}`}
                  width={375}
                  height={500}
                  placeholder="blur"
                />
              </div>
              {m.research}
              <div className="flex justify-center gap-8 mt-4">
                {m.website && (
                  <a
                    href={m.website}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                )}

                {m.otherLink && (
                  <a
                    href={m.otherLink}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Further Info
                  </a>
                )}
              </div>
            </div>
          );
        })}

        <Heading as="h4" size="subsection" text="Past Members" />
        {pastLabMembers.map((m, idx) => {
          return (
            <div key={idx} className="mb-12">
              <Heading as="h5" size="label" text={m.name} />
              <div className="flex justify-center my-4">
                <Image
                  src={m.image}
                  alt={`Photo of past lab member ${m.name}`}
                  width={500}
                  height={500}
                  placeholder="blur"
                />
              </div>
              {m.research}
              <div className="flex justify-center gap-8 mt-4">
                {m.website && (
                  <a
                    href={m.website}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                )}

                {m.otherLink && (
                  <a
                    href={m.otherLink}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Further Info
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}
