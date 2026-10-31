import { SeparatorLine } from "@/components/ui/separator-line";
import { Heading } from "@/components/ui/typography";
import jingmai from "@/app/biography/jingmai_oconnor_with_fossil_slab.jpg";
import Image from "next/image";
import Layout from "@/components/ui/layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Biography",
  description: "Information about Jingmai O'Connor.",
  path: "/biography",
});

const bio: string[] = [
  "As is probably obvious from my name, I’m Chinese-Irish American. I grew up outside LA in Pasadena, CA. I have two brothers and a sister (who are all awesome). I got my interest in Geology from my mom, who did her PhD when I was 10, also at USC.",
  "I love dogs (I have two), spicy food, dancing, hiking, tattoos (I have 25ish), traveling (especially to tropical beaches), and reading (mostly classic literature and SciFi).",
  "I have written over 175 scientific papers, 6 book chapters, and one children’s book (with several more on the way).",
  "I am passionate about sharing my research and love of fossils with people from all backgrounds. I am keen to inspire the next generation of diverse and inclusive scientists by showing that anyone can be a successful paleontologist as long as you work hard and by providing academic and emotional support as I am able. We are a community and it is together that we succeed.",
];
export default function Page() {
  return (
    <Layout>
      <section>
        <Heading
          as="h5"
          size="label"
          text="Associate Curator of Fossil Reptiles at The Field Museum of Natural History in Chicago"
        />

        <div className="mb-8">
          <SeparatorLine />
        </div>
        <div>
          <div className="flex flex-col xl:flex-row gap-12 xl:items-start items-center">
            <div className="max-w-xl xl:max-w-lg w-full">
              <Image
                src={jingmai}
                alt="Jingmai O'Connor in front of a fossil slab"
                width={800}
                height={600}
                placeholder="blur"
                preload
              />
            </div>
            <div>
              <Heading as="h6" size="small" text="Let me tell you a little bit about myself" />
              <div className="max-w-prose">
                {bio.map((b, i) => (
                  <p key={i} className="mb-2">
                    {b}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
