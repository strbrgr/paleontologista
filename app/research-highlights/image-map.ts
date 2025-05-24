import mabirds from "./assets/99-ma-birds.jpg"
import medullaryBone from "./assets/medullary_bone.jpg"
import fossilizedLungs from "./assets/fossilized-lungs.jpg"
import fossilizedOvaries from "./assets/fossilized-ovaries.jpg"
import microraptor from "./assets/microraptor.jpg"
import deathBy from "./assets/death-by.jpg"
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

