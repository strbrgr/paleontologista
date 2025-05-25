import { SeparatorLine } from "@/components/ui/separator-line";
import { HeaderOne } from "@/components/ui/typography";

export default function Page() {
  return (
    <section>
      <HeaderOne text="Say hello. I will do my best to get back to you shortly." className="max-w-2xl" />
      <SeparatorLine />
      <p>Send me an email:</p>
      <a href="mailto:jingmai@fieldmuseum.org" className="underline">
        jingmai@fieldmuseum.org
      </a>
    </section>
  )
}
