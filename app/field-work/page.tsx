import { SeparatorLine } from "@/components/ui/separator-line";
import { Heading } from "@/components/ui/typography";
import { fieldWork } from "@/app/field-work/fieldWork";
import Image from "next/image";
import Layout from "@/components/ui/layout";
import { getImageDimensions, ImageType } from "@/components/ui/image";

export const metadata = {
  title: "Field Work",
  description: "I have taken part in a variety of field trips.",
};

export default function Page() {
  return (
    <Layout>
      <section>
        <h4 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight dark:text-white">
          I have been lucky to participate in Field Work around the world.
        </h4>
        <SeparatorLine />

        <div className="max-w-2xl mx-auto mt-12">
          {fieldWork.map((fw, idx) => {
            return (
              <div key={idx} className="mb-12">
                <Heading as="h5" size="label" text={fw.year.toString()} />
                {fw.content.map((c, idx) => {
                  const { width, height } = getImageDimensions(
                    c.imageAspectRatio || ImageType.Square,
                  );
                  return (
                    <div key={idx} className="mb-8">
                      {c.img && (
                        <div className="flex justify-center my-4">
                          <Image
                            src={c.img}
                            alt="Jingmai O'Connor during field work"
                            width={width}
                            height={height}
                            placeholder="blur"
                            priority={idx === 0}
                          />
                        </div>
                      )}
                      <p
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: c.location }}
                      />
                    </div>
                  );
                })}
                {idx < fieldWork.length - 1 && (
                  <div className="max-w-12 mx-auto">
                    <SeparatorLine />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
