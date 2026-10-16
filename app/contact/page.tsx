import Layout from "@/components/ui/layout";
import { SeparatorLine } from "@/components/ui/separator-line";
import { Heading } from "@/components/ui/typography";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "How to contact Jingmai O'Connor",
  path: "/contact",
});

export default function Page() {
  return (
    <Layout>
      <section>
        <Heading as="h1" size="display"
          text="Say hello. I will do my best to get back to you shortly."
          className="max-w-2xl"
        />
        <div className="my-12">
          <SeparatorLine />
        </div>
        <p>Send me an email:</p>
        <a href="mailto:jingmai@fieldmuseum.org" className="underline">
          jingmai@fieldmuseum.org
        </a>
      </section>
    </Layout>
  );
}
