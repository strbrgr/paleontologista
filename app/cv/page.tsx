import { HeaderFive, HeaderSix } from "@/components/ui/typography";
import { fieldWork } from "@/app/field-work/fieldWork";
import { outreach } from "./outreach";
import Layout from "@/components/ui/layout";
import { StaticImageData } from "next/image";

export const metadata = {
  title: "CV",
  description: "Professional Experience of Jingmai O'Connor",
};

const currentPosition: { year: string; content: string[] }[] = [
  {
    year: "2020–present",
    content: [
      '<span class="font-bold">Associate Curator of Fossil Reptiles</span>',
      "Field Museum of Natural History",
      "Chicago, Illinois",
    ],
  },
];

const facultyPositions: { year: string; content: string[] }[] = [
  {
    year: "2022–present",
    content: [
      "Trainer",
      "Committee of Evolutionary Biology, University of Chicago",
    ],
  },
  {
    year: "2020–present",
    content: [
      "Adjunct Professor",
      "Institute of Vertebrate Paleontology and Paleoanthropology (CAS)",
    ],
  },
  {
    year: "2018–2020",
    content: [
      "Adjunct Professor",
      "University of Chinese Academy of Sciences (Beijing)",
    ],
  },
  {
    year: "2015-2020",
    content: [
      "Senior Professor",
      "Institute of Vertebrate Paleontology and Paleoanthropology (CAS)",
    ],
  },
  {
    year: "2013-2015",
    content: [
      "Associate Professor",
      "Institute of Vertebrate Paleontology and Paleoanthropology (CAS)",
    ],
  },
];

const educationAndTraining: { year: string; content: string[] }[] = [
  {
    year: "2010–2013",
    content: [
      "Postdoctoral Research Associate",
      "Institute of Vertebrate Paleontology and Paleoanthropology (Beijing)",
      "Chinese Academy of Sciences",
      "On Fellowship for Young International Scientists from Chinese Academy of Sciences",
    ],
  },
  {
    year: "2009",
    content: [
      "Ph.D.",
      "University of Southern California, Department of Geological Sciences",
      "Advisors Prof. David Bottjer (USC) and Dr. Luis Chiappe (Los Angeles Natural History Museum)",
      "Dissertation title: A Systematic Review of Enantiornithes (Aves: Ornithothoraces)",
    ],
  },
  {
    year: "2004",
    content: [
      "B.A.",
      "Occidental College",
      'Earth Sciences undergraduate thesis title (under Prof. Donald Prothero and Dr. Xiaoming Wang, LANHM): New specimen of the Miocene mustelid <span class="italic">Sthenictis</span> from the Miocene of Inner Mongolia, China',
    ],
  },
];

const professionalAppointments: { year: string; content: string[] }[] = [
  {
    year: "2025–present",
    content: ['Ornithology editor, <span class="italic">Palaeoworld</span>'],
  },
  {
    year: "2024–present",
    content: [
      'Ornithology editor, <span class="italic">Comptes Rendus Palevol</span>',
    ],
  },
  {
    year: "2023–present",
    content: ["Vice President", "Society of Avian Paleontology and Evolution"],
  },
  {
    year: "2022–present",
    content: [
      'Planetary change and Paleosciences Section Head, <span class="italic">All Earth</span>',
    ],
  },
  {
    year: "2020–present",
    content: [
      "Research Associate, American Museum of Natural History, New York",
    ],
  },
  {
    year: "2019–2022",
    content: [
      'Editorial Board Member, <span class="italic">Frontiers in Earth Science</span>',
    ],
  },
  {
    year: "2016–2021",
    content: ["Honorary Reader, The University of Witwatersrand, South Africa"],
  },
  {
    year: "2014–2024",
    content: [
      'Editorial Board Member, <span class="italic">Scientific Reports</span>',
    ],
  },
  {
    year: "2014–2015",
    content: ["Research Associate, Tomsk University, Russia"],
  },
  {
    year: "2013–2020",
    content: ["Adjunct Professor, Lingyi University"],
  },
  {
    year: "2009–present",
    content: ["Research Associate, Los Angeles Natural History Museum"],
  },
];

const awardsAndFellowships: { year: string; content: string[] }[] = [
  {
    year: "2024",
    content: [
      "Rock Star Award, Cranbrook Institute of Science",
      "Negaunee Seed Fund ($35,000 USD)",
    ],
  },
  {
    year: "2023",
    content: ["Negaunee Innovation Award ($55,000 USD)"],
  },
  {
    year: "2019",
    content: [
      "Outstanding achievements in scientific research in 2019, Institute of Vertebrate Paleontology and Paleoanthropology",
      "The Charles Schuchert Award, Paleontological Society",
      "Chinese Paleontological Association Award for Top 10 Discoveries of 2018",
    ],
  },
  {
    year: "2015",
    content: [
      'IVPP Research grant, <span class="italic">Archaeopteryx and a better understanding of early avian evolution</span> (No. KN205509)',
    ],
  },
  {
    year: "2014",
    content: [
      'IVPP Research grant, <span class="italic">Ecological evolution of Mesozoic birds</span> (No. KN214404)',
    ],
  },
  {
    year: "2013",
    content: [
      'Award for outstanding paper published in the <span class="italic">Journal of Systematic Paleontology</span> for, "A redescription of <span class="italic">Chaoyangia beishanensis</span> (Aves) and a comprehensive phylogeny of Mesozoic birds."',
    ],
  },
  {
    year: "2012–2014",
    content: [
      'National Natural Science Foundation of China research grant, <span class="italic">Ontogeny and phylogeny of Mesozoic birds</span> (No. 41102009)',
    ],
  },
  {
    year: "2012",
    content: [
      "Fellowship for Young International Scientists, Chinese Academy of Sciences",
    ],
  },
  {
    year: "2011",
    content: [
      "National Geographic Waitt Grant: Hunting for Jurassic Dinosaurs in Western Mongolia",
      "Research Fund for International Young Scientists, from the National Natural Science Foundation of China (No. 41050110438)",
    ],
  },
  {
    year: "2010",
    content: [
      "Fellowship for Young International Scientists, Chinese Academy of Sciences",
    ],
  },
  {
    year: "2008",
    content: [
      "East Asia and Pacific Summer Institute participant, National Science Foundation",
    ],
  },
  {
    year: "2007",
    content: [
      "Explorer’s Club Research Grant",
      "Graduate Professionalism Initiative Grant, University of Southern California",
    ],
  },
  {
    year: "2006",
    content: ["Keck Fellow, University of Southern California"],
  },
  {
    year: "2004",
    content: [
      "Avery China Adventure Recipient",
      "Keck Fellow, University of Southern California",
    ],
  },
  {
    year: "2003",
    content: ["Richter Undergraduate Research Grant, Occidental College"],
  },
];

const teachingExperience: { year: string; content: string[] }[] = [
  {
    year: "2025",
    content: ["Guest lecturer: Life during the age of dinosaurs (UC Berkeley)"],
  },
  {
    year: "2024",
    content: [
      "Guest lecturer: Origins and Extinctions: Rocks and Life in Deep Time (Macalaster College); Life during the age of dinosaurs (UC Berkeley); Dinosaur Evolution and Extinction (Columbia College Chicago)",
    ],
  },
  {
    year: "2022",
    content: [
      "Guest lecturer: Life during the age of dinosaurs (UC Berkeley); Dinosaur Evolution and Extinction (Columbia College Chicago)",
    ],
  },
  {
    year: "2021",
    content: [
      "Guest lecturer: Dinosaur Evolution and Extinction (Columbia College Chicago)",
    ],
  },
  {
    year: "2019",
    content: [
      'Guest lecturer on "The origin of dinosaurian flight and early avian diversity." Sino-German Field School, Yizhou Sino-German Paleontological Museum (organized by the Senckenberg Museum, Frankfurt, Germany)',
    ],
  },
  {
    year: "2018–2019",
    content: [
      "Comparative Vertebrate Osteology. University of the Chinese Academy of Sciences. Under-graduate, Master’s and PhD course. Title: Professor (responsible for lectures on non-dinosaurian archosaurs)",
    ],
  },
  {
    year: "2008",
    content: [
      "Teaching Assistant: Crises of a Planet (under-graduate course), University of Southern California",
    ],
  },
  {
    year: "2007",
    content: [
      'Guest lecturer on "The origin of flight." Institute of Vertebrate Paleontology and Paleoanthropology. Graduate course (Paleobiology; Instructors: David Hone and Corwin Sullivan)',
    ],
  },
  {
    year: "2004–2005",
    content: [
      "Teaching Assistant: Crises of a Planet (under-graduate course), University of Southern California",
    ],
  },
  {
    year: "2003",
    content: [
      "Teaching Assistant: Introduction to Field Methods (under-graduate course), Occidental College",
    ],
  },
];

const studentsSupervised: { year: string; content: string[] }[] = [
  {
    year: "2025–incoming",
    content: [
      '<span class="font-bold">Isaiah McKinney</span>, University of Chicago',
    ],
  },
  {
    year: "2023–present",
    content: [
      '<span class="font-bold">Alexander Clark</span>, University of Chicago, Ph.D. thesis title pending.',
    ],
  },
  {
    year: "2018–2022",
    content: [
      '<span class="font-bold">Wu Qian</span>, IVPP. Co-supervised with Li Zhiheng. Ph.D. thesis title: The morphology, histology and evolution of the avian pectoral girdle and its function during flight.',
    ],
  },
  {
    year: "2018–2020",
    content: [
      '<span class="font-bold">Liu Shumin</span>, IVPP. Co-supervised with Li Zhiheng. Master’s thesis title: Investigating possible gastroliths in a referred specimen of Bohaiornis guoi (Aves: Enantiornithes)',
    ],
  },
  {
    year: "2016–present",
    content: [
      '<span class="font-bold">Luis Vega-Jorquera</span>, Universidad de Chile. Co-supervised with Alexander Vargas. M.Sc. thesis title pending',
    ],
  },
  {
    year: "2013–2017",
    content: [
      '<span class="font-bold">Hu Han</span>, IVPP. Co-supervised with Zhou Zhonghe. Ph.D. thesis title: Skull and other character evolution of Early Cretaceous birds of China',
    ],
  },
];

const studentsUnofficiallySupervised: { year: string; content: string[] }[] = [
  {
    year: "2016–2017",
    content: [
      '<span class="font-bold">Wang Wei</span>, IVPP, M.Sc. Official supervisor: Zhou Zhonghe',
    ],
  },
  {
    year: "2013–2016",
    content: [
      '<span class="font-bold">Wang Min</span>, IVPP, Ph.D. Official supervisor: Zhou Zhonghe',
    ],
  },
  {
    year: "2013–2014",
    content: [
      '<span class="font-bold">Zhao Tao</span>, IVPP, M.Sc. Official supervisor: Zhou Zhonghe',
    ],
  },
  {
    year: "2011–2015",
    content: [
      '<span class="font-bold">Wang Yaming</span>, IVPP, Ph.D. Official supervisor: You Hailu',
    ],
  },
  {
    year: "2010–2013",
    content: [
      '<span class="font-bold">Zhou Shuang</span>, IVPP, Ph.D. Official supervisor: Zhou Zhonghe',
    ],
  },
  {
    year: "2009–2010",
    content: [
      '<span class="font-bold">Li Dongsheng</span>, IVPP, M.Sc. Official supervisor: Zhou Zhonghe',
    ],
  },
];

const postdoctoralResearchersSupervised: { year: string; content: string[] }[] =
  [
    {
      year: "2023–present",
      content: [
        '<span class="font-bold">Pei-Chen Kuo</span>, Field Museum – Avian palatal evolution',
      ],
    },
    {
      year: "2022–2024",
      content: [
        '<span class="font-bold">Yosef Kiat</span>, Field Museum – Evolution of feathers',
      ],
    },
    {
      year: "2021–2023",
      content: [
        '<span class="font-bold">Matteo Fabbri</span>, Field Museum – Evo-devo of the avian form',
      ],
    },
    {
      year: "2017–2019",
      content: [
        '<span class="font-bold">Alida Bailleul</span>, IVPP – Soft tissues in Cretaceous birds',
      ],
    },
  ];

const undergraduateStudentsSupervised: { year: string; content: string[] }[] = [
  {
    year: "2024–present",
    content: [
      '<span class="font-bold">Spencer Saines</span> (University of Illinois Urbana-Champaign) – Green River birds',
    ],
  },
  {
    year: "2023–present",
    content: [
      '<span class="font-bold">Sahaara Clark</span> (University of California, Santa Barbara) - Brodavidae',
    ],
  },
  {
    year: "2022–2023",
    content: [
      '<span class="font-bold">Caleb Bohus</span> (Southern Illinois University) – Southern Illinois early tetrapods',
    ],
  },
  {
    year: "2022–2024",
    content: [
      '<span class="font-bold">Eduardo Cruz-Vega</span> (University of Puerto Rico) – Hell Creek neornithine',
    ],
  },
];

const recentGraduatesSupervised: { year: string; content: string[] }[] = [
  {
    year: "2024",
    content: [
      '<span class="font-bold">Jessica Zarosl</span> – Hell Creek neornithine',
    ],
  },
  {
    year: "2022–present",
    content: [
      '<span class="font-bold">Christian Cooper</span> – Histology of Baptornis',
      '<span class="font-bold">Ryan Davila</span> – Forelimb biomechanics of T. rex',
    ],
  },
  {
    year: "2023–2025",
    content: [
      '<span class="font-bold">Aaron Steele</span> – Hell Creek microvertebrates',
    ],
  },
];

const undergraduateInterns: { year: string; content: string[] }[] = [
  {
    year: "2025",
    content: ["Joseph Maltese (Roosevelt University)"],
  },
  {
    year: "2024",
    content: ["Clifton Chaplin and Morgan Brown (Roosevelt University)"],
  },
  {
    year: "2022",
    content: [
      "Delaney Drummond (Columbia College); Victoria Burchfield (Columbia College); GE Creech (Columbia College); Aidan Torres (Columbia College)",
    ],
  },
  {
    year: "2021",
    content: [
      "Kiana Mohammadian (Colombia University; Field Museum Women in Science Summer Internship program); Nick Guegel (University of Maryland; remote)",
    ],
  },
  {
    year: "2020",
    content: ["Idriss Pelletan (University of Poitiers, France; remote)"],
  },
];

const memberships: { year: string; content: string[] }[] = [
  {
    year: "2018–2023",
    content: ["Palaeontological Association", "Paleontological Society"],
  },
  {
    year: "2005–present",
    content: ["Society of Avian Paleontology and Evolution"],
  },
  {
    year: "2003–present",
    content: ["Society of Vertebrate Paleontology"],
  },
];

const invitedPresentations: { year: string; content: string[] }[] = [
  {
    year: "2025",
    content: [
      "Museum of the Rockies, Montana State University, Clemson University",
    ],
  },
  {
    year: "2024",
    content: [
      "University of California, San Diego, Burke Museum, University of Washington, Carter County Museum DinoShindig",
    ],
  },
  {
    year: "2023",
    content: [
      "Fortnightly, University of Reading, Cranbrook Women Rock Science Speaker Series, Carter County Museum DinoShindig, Polish Academy of Sciences, Benedictine University, Columbia College Chicago, University of Alberta",
    ],
  },
  {
    year: "2022",
    content: [
      "Milwaukee Public Museum, Burpee Museum Paleofest, Virginia Tech, Montana State University, UC Berkeley, Carter County Museum DinoShindig, University of Illinois Chicago, Misericordia Fossil Freestyle, ESCONI",
    ],
  },
  {
    year: "2021",
    content: [
      "Illinois Natural History Survey, Denver Museum of Nature and Science, South Coast Geological Society, Montana State University, Dead Lizard Society, University of Chicago EvMorph, Glencoe Public Library, University of Chicago Geophysical Sciences Department",
    ],
  },
  {
    year: "2020",
    content: [
      "SoCal Paleontology Society, Paleontological Society, Philip J. Currie Museum",
    ],
  },
  {
    year: "2019",
    content: [
      "Field Museum, International Meeting of Early-Stage Researchers in Paleontology",
    ],
  },
  {
    year: "2018",
    content: ["Palaeontological Association"],
  },
  {
    year: "2016",
    content: [
      "CAS SELF (Science Education Life Future) talk: Fascinating early birds",
    ],
  },
];

const exhibitions: { year: string; content: string[] }[] = [
  {
    year: "2026",
    content: ["Field Museum: Pokémon Museum"],
  },
  {
    year: "2025",
    content: ["Field Museum: After the Impact"],
  },
  {
    year: "2024",
    content: [
      "Field Museum: Chicago Archaeopteryx (lead scientific advisor; permanent)",
      "Field Museum: Chicago Archaeopteryx (lead scientific advisor; temporary)",
    ],
  },
  {
    year: "2023",
    content: [
      "Field Museum: The Changing Face of Science (lead scientific advisor)",
    ],
  },
];

const symposiaOrganized: { year: string; content: string[] }[] = [
  {
    year: "2021",
    content: [
      "The appearance and loss of flight in paravians, 6th International Palaeontological Congress",
    ],
  },
];

const specialVolumesOrganized: { year: string; content: string[] }[] = [
  {
    year: "2021",
    content: [
      'Early avian evolution, <span class="italic">Frontiers in Earth Science</span>',
    ],
  },
];

function Content(props: {
  header: string;
  content: { year: string; content: string[]; img?: StaticImageData | null }[];
}) {
  return (
    <div className="mb-12">
      <HeaderFive text={props.header} />
      {props.content.map((item) => (
        <div className="flex flex-row mb-4" key={item.year}>
          <p className="min-w-40 font-bold">{item.year}</p>
          <div className="flex flex-col">
            {item.content.map((v, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: v }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <HeaderFive text="Jingmai Kathleen O'Connor" />
          <HeaderFive text="邹晶梅" />
        </div>
        <Content header="Current Position" content={currentPosition} />
        <Content header="Faculty Positions" content={facultyPositions} />
        <Content
          header="Education and Training"
          content={educationAndTraining}
        />
        <Content
          header="Professional Appointments & Responsibilities"
          content={professionalAppointments}
        />
        <Content
          header="Awards, Honors, Grants and Fellowships"
          content={awardsAndFellowships}
        />
        <Content header="Teaching Experience" content={teachingExperience} />
        <Content
          header="Students [Officially] Supervised"
          content={studentsSupervised}
        />
        <Content
          header="Students [Unofficially] Supervised"
          content={studentsUnofficiallySupervised}
        />
        <Content
          header="Post-doctoral Researchers Supervised"
          content={postdoctoralResearchersSupervised}
        />
        <Content
          header="Undergraduate Students Supervised"
          content={undergraduateStudentsSupervised}
        />
        <Content
          header="Recent Graduates Supervised"
          content={recentGraduatesSupervised}
        />
        <Content
          header="Undergraduate Interns"
          content={undergraduateInterns}
        />

        <div className="mb-12">
          <HeaderFive text="Field Work In Paleontology" />
          {fieldWork.map((item) => (
            <div className="flex flex-row mb-4" key={item.year}>
              <p className="min-w-40 font-bold">{item.year}</p>
              <div className="flex flex-col">
                {item.content.map((v, idx) => (
                  <p
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: v.location }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Content header="Memberships" content={memberships} />
        <Content
          header="Invited Presentations"
          content={invitedPresentations}
        />

        <HeaderFive text="Media Coverage & Appearances" />
        <div className="mb-6">
          <HeaderSix text="Printed interviews" />
          <p>
            Current Biology (2016), Nature (2017), Smithsonian Magazine (2018),
            Geo Kompakt (2018), Rewire (2019), Massive Science (2020), USC
            Trojan Family (2020), Chicago Sun Times (2020, 2023), Medium (2021),
            Lion’s Roar Magazine (2021), Chicago Magazine (2023)
          </p>
        </div>
        <div className="mb-6">
          <HeaderSix text="Podcasts" />
          <p>
            Friends Like Us (2015), We Know Dino (2018), VitalCorps Salon
            (2019), Paleonerds (2020), BBC One Earth (2021), If/Then (2021),
            Brains On (2021), Pulsar (2021), Unexplainable (2021), NPR Everyone
            & Their Mom (2022), Solve It (2022), Talk Nerdy (2022), Cranbook
            Museum (2022), Jura-sick (2023), Ignition Sequence (2024), NPR
            Shortwave (2024), Moment of Um (2025), Brains On (2025)
          </p>
        </div>
        <div className="mb-12">
          <HeaderSix text="Documentaries" />
          <p>
            Science Skills! Paleontology (Science Insider, 2022), Breakthrough:
            Women in STEM (Science Friday, 2019), SELF scientist profile (CAS,
            2018), When Whales Walked (PBS, 2019), Why Dinosaurs (2023), The
            Bones (2024), End Cretaceous extinction (release and title TBD), Le
            rêve de Léonard, les secrets du vol dans la nature (2024), IMAX T.
            rex (2024), Prehistoric Beasts Season 2 (2024), Dino-birds (PBS,
            2025), Mission Unstoppable (2025)
          </p>
        </div>

        <Content header="Outreach" content={outreach} />
        <Content header="Exhibitions" content={exhibitions} />

        <HeaderFive text="Additional Services" />
        <div className="mb-6">
          <HeaderSix text="Peer Reviews" />
          <p>
            Anales de Paleontologie, Atti della Società Italiana di Scienze
            Naturali e del Museo Civico di Storia Naturale di Milano, Avian
            Research, Biology Letters, BMC Biology (2), Communications Biology
            (2), Cretaceous Research (11), Current Biology (7), eLife (4),
            Evolution, Fossil Studies, Frontiers in Earth Science,
            Geoconservation Research, Geodiversitas, Historical Biology (5),
            iScience (2), Journal of Anatomy, Journal of Evolutionary Biology
            (3), Journal of Morphology (2), Journal of Ornithology, Journal of
            Paleontology (3), Journal of Systematic Palaeontology (6), Journal
            of Vertebrate Paleontology (13), Lethaia, National Science Review
            (3), Nature (6), Nature Communications, Nature Ecology and Evolution
            (2), Naturwissenschaften, New Mexico Natural History Museum Bulletin
            (3), Paleobiology, Palaeontology (3), Palaeontological Polonica,
            Palaeoworld, PeerJ (4), Philosophical Transactions of the Royal
            Society B, PLoS ONE (5), Proceedings of the National Academy of
            Science (1), Proceedings of the Royal Society B (3), Science (4),
            Science Advances (4), Scientific Reports (3), Spanish Journal of
            Palaeontology, Systematic Palaeontology (2), The Anatomical Record,
            The Innovation (2), Vertebrata Palasiatica (6), Zoological Journal
            of the Linnean Society (2)
          </p>
        </div>

        <div className="mb-12">
          <HeaderSix text="Grant Reviews" />
          <p>
            Hong Kong Research Grants Council (6); Medical Research Council,
            UKRI (2); Royal Society University Research Fellowship (1); Swiss
            National Science Foundation.
          </p>
        </div>

        <Content header="Symposia Organized" content={symposiaOrganized} />
        <Content
          header="Special Volumes Organized"
          content={specialVolumesOrganized}
        />

        <div className="mb-12">
          <HeaderFive text="Promoting Equity Diversity and Inclusion" />
          <p>
            Palaeontologists Against Systemic Racism Society (founding member,
            2022)
          </p>
        </div>
      </div>
    </Layout>
  );
}
