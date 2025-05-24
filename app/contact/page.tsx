import { SeparatorLine } from "@/components/ui/separator-line";
import { HeaderOne } from "@/components/ui/typography";

const socialLinks: { platform: string, url: string }[] = [
  {
    platform: "Twitter", url: "https://twitter.com/paleontologista"
  },
  { platform: "Facebook", url: "https://www.facebook.com/jingmai.oconnor/" },
  { platform: "Instagram", url: "https://www.instagram.com/paleontologista/" },
  { platform: "ResearchGate", url: "https://www.researchgate.net/profile/Jingmai-Oconnor" },
  { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=BzgZsCoAAAAJ&hl=en" }]

export default function Page() {
  return (
    <section>
      <HeaderOne text="Say hello. I will do my best to get back to you shortly." className="max-w-2xl" />
      <SeparatorLine />
      <div className="flex flex-row gap-20">
        <div>
          <p>Send me an email:</p>
          <a href="mailto:jingmai@fieldmuseum.org" className="underline">
            jingmai@fieldmuseum.org
          </a>
        </div>
        <div>
          <p>Follow me on Social Media: </p>
          {socialLinks.map(link => (
            <div key={link.platform}>
              <a href={link.url} className="underline">{link.platform}</a>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
