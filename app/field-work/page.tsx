import { SeparatorLine } from "@/components/ui/separator-line";
import { HeaderFive } from "@/components/ui/typography";
import { fieldWork } from "../cv/fieldWork";
import alberta from '@/app/field-work/img/fieldwork_alberta_2016.jpg';
import changma from '@/app/field-work/img/fieldwork_changma_2014.jpg';
import qinghai from '@/app/field-work/img/fieldwork_qinghai_2005.jpg';
import sa from '@/app/field-work/img/fieldwork_sa_2017.jpg';
import Image from "next/image";
import { StaticImageData } from "next/image";

export const metadata = {
  title: "Field Work",
  description: "I have taken part in a variety of field trips.",
}

const images: { image: StaticImageData; alt: string, description: string }[] = [
  {
    image: sa,
    alt: "",
    description:
      "Romania, American Museum of Natural History expedition prospecting and quarrying in Cretaceous deposits in the Hateg Basin and near Sebes"
  },
  {
    image: alberta,
    alt: "",
    description:
      "Qinghai, Gansus, Xingjiang, China, Prospecting for mammals in Neogene deposits identified by oil geologists in the 1950’s"
  },
  {
    image: changma,
    alt: "",
    description:
      "Montana, USA, Los Angeles County Museum of Natural History expedition prospecting and quarrying in the Late Cretaceous Hell Creek Formation"
  },
  {
    image: qinghai,
    alt: "",
    description:
      "Montana, USA, Los Angeles County Museum of Natural History expedition prospecting and quarrying in the Late Cretaceous Hell Creek Formation"
  },
]

export default function Page() {
  return (
    <section>
      <h4 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight dark:text-white" >
        I have been lucky to participate in Field Work around the world.
      </h4>
      <SeparatorLine />
      {images.map((image) => {
        return (
          image.description
        )
      })}



      <div className="max-w-2xl mx-auto">
        {fieldWork.map((fw, idx) => {
          return (
            <div key={idx} className="mb-12">
              <HeaderFive text={fw.year.toString()} />
              {
                fw.content.map((c, idx) => {
                  return (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: c }} />
                  )
                })
              }
            </div>
          )
        })}
      </div>
    </section>
  )
}
