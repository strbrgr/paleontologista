import { SeparatorLine } from "@/components/ui/separator-line";

const images: { image: string; alt: string, description: string }[] = [
  {
    image: "/",
    alt: "",
    description:
      "Utah, University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"
  },
  {
    image: "/",
    alt: "",
    description:
      "Romania, American Museum of Natural History expedition prospecting and quarrying in Cretaceous deposits in the Hateg Basin and near Sebes"
  },
  {
    image: "/",
    alt: "",
    description:
      "Qinghai, Gansus, Xingjiang, China, Prospecting for mammals in Neogene deposits identified by oil geologists in the 1950’s"
  },
  {
    image: "/",
    alt: "",
    description:
      "Montana, USA, Los Angeles County Museum of Natural History expedition prospecting and quarrying in the Late Cretaceous Hell Creek Formation"
  },
]

const field_work: { year: number; excursion: { location: string; description: string }[] }[] = [
  {
    year: 2021,
    excursion: [{
      location: "Utah, USA.",
      description: "University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"
    }]
  },
  {
    year: 2019,
    excursion: [{
      location: "Romania.",
      description: "American Museum of Natural History expedition prospecting and quarrying in Cretaceous deposits in the Hateg Basin and near Sebes"
    }]
  },
  {
    year: 2017,
    location: "Romania.",
    description: ["American Museum of Natural History expedition prospecting and quarrying in Cretaceous deposits in the Hateg Basin and near Sebes"]
  },
  {
    year: 2016,
    location: "Free State, South Africa.",
    description: ["University of Witswatersrand expedition prospecting and quarrying in Jurassic deposits collecting dinosaurs and mammals", ""]
  },
  {
    year: 2014,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
  {
    year: 2011,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
  {
    year: 2010,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
  {
    year: 2007,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
  {
    year: 2006,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
  {
    year: 2005,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
  {
    year: 2003,
    location: "Utah, USA",
    description: ["University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation"]
  },
]

export default function Page() {
  return (
    <>
      <h4 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight dark:text-white" >
        I have been lucky to participate in Field Work around the world.
      </h4>
      <SeparatorLine />
      {images.map((image) => {
        return (
          image.description
        )
      })}

      {field_work.map((image) => {
        return (
          image.year
        )
      })}
    </>
  )
}
