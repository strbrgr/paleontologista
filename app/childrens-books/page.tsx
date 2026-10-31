import Image, { StaticImageData } from "next/image";
import { Heading } from "@/components/ui/typography";
import Layout from "@/components/ui/layout";
import { createPageMetadata } from "@/lib/metadata";
import whenDinosaursConqueredTheSkies from "@/app/childrens-books/img/when_dinosaurs_conquered_the_skies.webp";
import zoomOut from "@/app/childrens-books/img/zoom_out.webp";
import birdPrimeval from "@/app/childrens-books/img/bird_primeval.webp";

export const metadata = createPageMetadata({
  title: "Children's Books",
  description: "Children’s books by Jingmai O'Connor.",
  path: "/childrens-books",
});

const books: {
  title: string;
  image: StaticImageData;
  width: number;
  height: number;
  description: string;
}[] = [
  {
    title: "When Dinosaurs Conquered the Skies",
    image: whenDinosaursConqueredTheSkies,
    width: 718,
    height: 1000,
    description:
      "The incredible story of bird evolution, written by Jingmai O'Connor and illustrated by Maria Brzozowska.",
  },
  {
    title: "Zoom Out: Prehistoric World",
    image: zoomOut,
    width: 896,
    height: 1081,
    description:
      "A colorful journey through the prehistoric world, written by Jingmai O'Connor and illustrated by Owen Davey.",
  },
  {
    title: "Bird Primeval",
    image: birdPrimeval,
    width: 1000,
    height: 1500,
    description:
      "Coming in 2027 from Rex Tooth Studios.",
  },
];

export default function Page() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto">
        <div className="my-12">
          <p>
            I write children’s books about dinosaurs, birds, and the deep history
            of life.
          </p>
        </div>

        {books.map((book) => (
          <div key={book.title} className="mb-12">
            <Heading as="h4" size="subsection" text={book.title} />
            <div className="flex justify-center my-4">
              <Image
                src={book.image}
                alt={`Cover of ${book.title}`}
                width={book.width}
                height={book.height}
                className="h-auto max-h-[600px] w-auto object-contain"
                placeholder="blur"
              />
            </div>
            <p>{book.description}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
