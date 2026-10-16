import type { StaticImageData } from "next/image";
import type { Metadata } from "next";
import archaeopteryx from "@/app/research-highlights/chicago-archaeopteryx/chicago_archaeopteryx.jpg";
import babyEnantiornithines from "@/app/research-highlights/baby-enantiornithines-had-it-tough/baby_enantiornithines_had_it_tough_square.jpg";
import trex from "@/app/research-highlights/a-mystery-of-tyrannosaur-proportions/trex.jpg";
import lateCretaceous from "@/app/research-highlights/best-preserved-late-cretaceous-enantiornithine/late_cretaceous_enantiornithine.jpg";
import stomachCrystals from "@/app/research-highlights/mystery-of-stomach-crystals/stomach_crystals.jpg";
import sexyTail from "@/app/research-highlights/enantiornithine-with-sexy-tail/enantiornithine_sexy_tail.jpg";
import maBirds from "@/app/research-highlights/99-ma-birds-in-amber/99-ma-birds.jpg";
import medullaryBone from "@/app/research-highlights/a-controversial-bone-tissue/medullary_bone.jpg";
import fossilizedLungs from "@/app/research-highlights/fossilized-lungs/fossilized-lungs.jpg";
import fossilizedOvaries from "@/app/research-highlights/fossilized-ovaries/fossilized-ovaries.jpg";
import microraptor from "@/app/research-highlights/microraptors-last-meal/microraptor.jpg";
import deathBy from "@/app/research-highlights/death-by/death-by.jpg";
import imparavis from "@/app/research-highlights/attenboroughs-strange-bird/imparavis_square.jpg";
import anchiornis from "@/app/research-highlights/anchiornis-could-not-fly/anchiornis.webp";
import chromeo from "@/app/research-highlights/nerdy-girl/chromeo.webp";
import foodForFlight from "@/app/research-highlights/food-for-flight/archeopteryx-square.webp";

export type ResearchHighlight = {
  slug: string;
  title: string;
  image: StaticImageData;
  alt: string;
  summary: string;
  featured?: boolean;
};

export const researchHighlights = [
  {
    slug: "feather-found-in-fossil-feces",
    title: "Feather found in fossil feces",
    image: foodForFlight,
    alt: "Image of the Chicago Archaeopteryx fossil",
    summary: "New features from the Chicago specimen show how Archaeopteryx fed fast for flying.",
    featured: true,
  },
  {
    slug: "food-for-flight",
    title: "Food for flight",
    image: foodForFlight,
    alt: "Image of the Chicago Archaeopteryx fossil",
    summary: "New features from the Chicago specimen show how Archaeopteryx fed fast for flying.",
    featured: true,
  },
  {
    slug: "nerdy-girl",
    title: "Nerdy girl by Chromeo(rnis)",
    image: chromeo,
    alt: "Image of Jingmai O'Connor and Chromeo",
    summary:
      "A new species of enantiornithine closely related to Longipteryx and named in honor of the Chromeo Funklordz.",
    featured: true,
  },
  {
    slug: "anchiornis-could-not-fly",
    title: "Anchiornis couldn't fly",
    image: anchiornis,
    alt: "Image of an Anchiornis fossil",
    summary:
      "I won’t say I told you so… but here’s a bunch of evidence that proves Anchiornis isn’t a bird.",
  },
  {
    slug: "chicago-archaeopteryx",
    title: "Chicago Archaeopteryx",
    image: archaeopteryx,
    alt: "Image of the Chicago Archaeopteryx fossil",
    summary:
      "The best Archaeopteryx – EVER! Check out info from the first of many papers on this beauty.",
  },
  {
    slug: "attenboroughs-strange-bird",
    title: "Attenborough’s strange bird",
    image: imparavis,
    alt: "Image of an enantiornithine fossil",
    summary: "The oldest toothless enantiornithine and the mystery of tooth loss in this clade.",
  },
  {
    slug: "baby-enantiornithines-had-it-tough",
    title: "Baby Enantiornithines had it tough",
    image: babyEnantiornithines,
    alt: "Image of amber preserving enantiornithine feathers",
    summary:
      "A small piece of amber preserving immature enantiornithine feathers tells the tale of hardships these babies faced.",
  },
  {
    slug: "a-mystery-of-tyrannosaur-proportions",
    title: "A mystery of tyrannosaur proportions",
    image: trex,
    alt: "Holes in the jaw of SUE the T. rex",
    summary: "Pathology is one of the most difficult things to unravel in an extinct organism.",
  },
  {
    slug: "best-preserved-late-cretaceous-enantiornithine",
    title: "Best preserved Late Cretaceous enantiornithine",
    image: lateCretaceous,
    alt: "A Late Cretaceous enantiornithine skull",
    summary:
      "Late Cretaceous fossil birds are rare. When found, they are usually very incomplete hindering attempts to understand broad trends in avian evolution across the Cretaceous.",
  },
  {
    slug: "mystery-of-stomach-crystals",
    title: "Mystery of the stomach crystals",
    image: stomachCrystals,
    alt: "Silicified soft tissue in the abdomen of an enantiornithine bird",
    summary:
      "There is almost no evidence of enantiornithine diet in the form of ingested remains. This is strange because thousands of well-preserved specimens have been recovered and such evidence exists for contemporaneous ornithuromorphs known from far fewer specimens. As such, any evidence pertaining to enantiornithine diet and digestive function is important.",
  },
  {
    slug: "enantiornithine-with-sexy-tail",
    title: "Enantiornithine with sexy tail",
    image: sexyTail,
    alt: "Yuanchuavis, an enantiornithine bird",
    summary:
      "The tail is the most diverse part of a bird’s plumage – this is because while the tail can help in flight, its not essential, and thus free to evolve elaborate sexual ornaments in certain conditions.",
  },
  {
    slug: "99-ma-birds-in-amber",
    title: "99 Ma birds in amber",
    image: maBirds,
    alt: "An enantiornithine bird leg trapped in amber",
    summary:
      "Recently our understanding of Cretaceous birds is being expanded by exceptional discoveries of small enantiornithine birds trapped in Cenomanian aged amber from Myanmar. These discoveries include two nearly complete individuals and one isolated hindlimb that represents a new species, Elektorornis chenguangi.",
  },
  {
    slug: "fossilized-lungs",
    title: "Fossilized lungs",
    image: fossilizedLungs,
    alt: "Fossilized lungs in an Archaeorhynchus",
    summary:
      "Fossilized soft tissues are rare – even more rare are traces of internal organs (integument like skin and feathers being relatively more common). In an article published in the Proceedings of the National Academy of Sciences U.S.A., I described a specimen of Archaeorhynchus spathula, a primitive ornithuromorph bird, preserving traces of the lung tissue.",
  },
  {
    slug: "death-by",
    title: "Death by…",
    image: deathBy,
    alt: "Stones in the guts of a Yanornis",
    summary:
      "When an animal is preserved with evidence that it was rapidly buried by a collapsed sand dune, pyroclastic flow, or turbidite you can pretty safely assume that’s how the animal died.",
  },
  {
    slug: "a-controversial-bone-tissue",
    title: "A controversial bone tissue",
    image: medullaryBone,
    alt: "Enantiornithine bone tissue preserving medullary bone",
    summary:
      "Since it was described in a specimen of T. rex, medullary bone has been the center of much attention. Medullary bone is a tissue unique to living female birds and found only during the egg-laying cycle that forms in the medullary cavity (and other spaces) inside bones.",
  },
  {
    slug: "fossilized-ovaries",
    title: "Fossilized ovaries",
    image: fossilizedOvaries,
    alt: "Fossilized ovaries in an enantiornithine bird",
    summary:
      "Modern birds (Neornithes) have a reproductive system that is highly modified compared to other amniotes. They are the only amniotes with a single functional ovary and oviduct (although within Aves there are a few exceptions, such as the Kiwi bird).",
  },
  {
    slug: "microraptors-last-meal",
    title: "Microraptor’s last meal",
    image: microraptor,
    alt: "A microraptor with a lizard in its stomach",
    summary:
      "I have described two specimens of Microraptor preserving ingested remains. One preserves the articulated remains of an enantiornithine bird; the other preserves the articulated remains of previously unknown species of lizard (named Indrasaurus wangi).",
  },
] satisfies ResearchHighlight[];

export function getResearchHighlight(slug: string) {
  const highlight = researchHighlights.find((item) => item.slug === slug);

  if (!highlight) {
    throw new Error(`Unknown research highlight: ${slug}`);
  }

  return highlight;
}

export function createResearchMetadata(slug: string): Metadata {
  const { title, summary } = getResearchHighlight(slug);

  return {
    title,
    description: summary,
  };
}
