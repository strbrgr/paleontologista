import mabirds from "./assets/img/99-ma-birds.jpg"
import medullaryBone from "./assets/img/medullary_bone.jpg"
import fossilizedLungs from "./assets/img/fossilized-lungs.jpg"
import fossilizedOvaries from "./assets/img/fossilized-ovaries.jpg"
import microraptor from "./assets/img/microraptor.jpg"
import deathBy from "./assets/img/death-by.jpg"
import { StaticImageData } from "next/image"

const imageMap: Record<string, StaticImageData> = {
  "99mabirds": mabirds,
  "medullaryBone": medullaryBone,
  "fossilizedLungs": fossilizedLungs,
  "fossilizedOvaries": fossilizedOvaries,
  "deathBy": deathBy,
  "microraptor": microraptor
}

export const getImageFromKey = (key: string): StaticImageData => {
  if (!imageMap[key]) {
    throw new Error(`Missing image for key: ${key}`);
  }
  return imageMap[key]
}

