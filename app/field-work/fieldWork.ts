import romania from '@/app/field-work/img/fieldwork_romania_2019.jpg';
import sa from '@/app/field-work/img/fieldwork_sa_2017.jpg';
import alberta from '@/app/field-work/img/fieldwork_alberta_2016.jpg';
import changma from '@/app/field-work/img/fieldwork_changma_2014.jpg';
import mongolia from '@/app/field-work/img/fieldwork_mongolia_2011.jpg';
import xinjiang from '@/app/field-work/img/fieldwork_xinjiang_2010.jpg';
import utah from '@/app/field-work/img/fieldwork_utah_2007.jpg';
import montana_2006 from '@/app/field-work/img/fieldwork_montana_2006.jpg';
import qinghai from '@/app/field-work/img/fieldwork_qinghai_2005.jpg';
import montana_2003 from '@/app/field-work/img/fieldwork_montana_2003.jpg';
import { StaticImageData } from 'next/image';
import { ImageType } from '@/components/ui/image';

export const
  fieldWork: { year: string; content: { img: StaticImageData | null, imageAspectRatio: ImageType | null, location: string }[] }[] = [
    {
      year: "2024",
      content: [
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Montana, USA</span> – microsite excavation and sediment processing, prospecting Hell Creek Formation (expedition leader)", },
      ]
    },
    {
      year: "2023",
      content: [
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Montana, USA</span> – microsite excavation and sediment processing, Hell Creek Formation (expedition leader)", },
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Wyoming, USA</span> – quarrying limestones of the Fossil Lake member, Green River Fm, Stones & Bones class (University of Chicago)", },
      ]
    },
    {
      year: "2022-ongoing",
      content: [
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Montana, USA</span> – The O’Connor lab have been working a new productive microsite in the Hell Creek, looking for birds and traces of other small and rare organisms", },
      ]
    },
    {
      year: "2022",
      content: [
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Montana, USA</span> – microsite sediment processing, Hell Creek Formation (expedition leader)", },
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Dinosaur Provincial Park, Alberta, Canada</span> – joint expedition with the University of Alberta, centennial celebration of Elmer Riggs 1922 fieldwork", },
      ]
    },
    {
      year: "2021",
      content: [
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Utah</span>, University of Minnesota – Field Museum joint expedition prospecting and quarrying in the Cretaceous Cedar Mountain Formation", },
      ]
    },
    {
      year: "2019",
      content: [
        { img: romania, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Romania</span>, American Museum of Natural History expedition prospecting and quarrying in Cretaceous deposits in the Hateg Basin and near Sebes", },
      ]
    },
    {
      year: "2017",
      content: [
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Romania</span>, American Museum of Natural History expedition prospecting and quarrying in Cretaceous deposits in the Hateg Basin and near Sebes", },
      ]
    },
    {
      year: "2016",
      content: [
        { img: sa, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Free State, South Africa</span>, University of Witswatersrand expedition prospecting and quarrying in Jurassic deposits collecting dinosaurs and mammals", },
        { img: alberta, imageAspectRatio: ImageType.Vertical, location: "<span class=\"font-bold\">Alberta, Canada</span>, Phil J. Currie Dinosaur Museum and University of Alberta expedition prospecting in Cretaceous deposits in the Grand Prairie region", },
      ]
    },
    {
      year: "2014",
      content: [
        { img: changma, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Gansu Province, China</span>, Institute of Vertebrate Paleontology and Paleoanthropology expedition quarrying for Early Cretaceous birds in the Xiagou Formation" },
      ]
    },
    {
      year: "2011",
      content: [
        { img: mongolia, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Mongolia</span>, American Museum of Natural History expedition prospecting for Cretaceous dinosaurs and lizards and Paleogene mammals" },
      ]
    },
    {
      year: "2010",
      content: [
        { img: xinjiang, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Xinjiang, China</span>, Institute of Vertebrate Paleontology and Paleoanthropology expedition prospecting for dinosaurs in the Jurassic Shishugou Formation in the Junggar Basin" },
      ]
    },
    {
      year: "2007",
      content: [
        { img: utah, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Utah, USA</span>, The University of Southern California-Los Angeles County Museum of Natural History Southern Utah Dinosaur Expedition prospecting in the Kaiparowits Formation in Grand Staircase-Escalante (expedition leader)" },
      ]
    },
    {
      year: "2006",
      content: [
        { img: montana_2006, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Montana, USA</span>, Los Angeles County Museum of Natural History expedition prospecting and quarrying in the Late Cretaceous Hell Creek Formation" },
      ]
    },
    {
      year: "2005",
      content: [
        { img: qinghai, imageAspectRatio: ImageType.Horizontal, location: "<span class=\"font-bold\">Qinghai, Gansus, Xingjiang, China</span>, Prospecting for mammals in Neogene deposits identified by oil geologists in the 1950’s" },
      ]
    },
    {
      year: "2003",
      content: [
        { img: montana_2003, imageAspectRatio: ImageType.Vertical, location: "<span class=\"font-bold\">Montana, USA</span>, Los Angeles County Museum of Natural History expedition prospecting and quarrying in the Late Cretaceous Hell Creek Formation" },
        { img: null, imageAspectRatio: null, location: "<span class=\"font-bold\">Inner Mongolia, China</span>, Institute of Vertebrate Paleontology and Paleoanthropology expedition to prospect and screen-wash for mammals in Neogene deposits" },
      ]
    }
  ];

