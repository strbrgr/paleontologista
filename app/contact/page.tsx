import Layout from "@/components/ui/layout";
import { SeparatorLine } from "@/components/ui/separator-line";
import { HeaderOne } from "@/components/ui/typography";

export const metadata = {
  title: "Contact",
  description: "How to contact Jingmai O'Connor",
}

export default function Page() {
  return (
    <Layout>
      <section>
        <HeaderOne text="Say hello. I will do my best to get back to you shortly." className="max-w-2xl" />
        <div className="my-12">
          <SeparatorLine />
        </div>
        <p>Send me an email:</p>
        <a href="mailto:jingmai@fieldmuseum.org" className="underline">
          jingmai@fieldmuseum.org
        </a>
      </section>
    </Layout>
  )
}
