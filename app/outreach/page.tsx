import { HeaderFive } from "@/components/ui/typography";
import { outreach } from "../cv/outreach";

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto">
      <HeaderFive text="I participate in frequent outreach – reach out about having me speak to your class!" />
      {outreach.map((item) => (
        <div className="flex flex-row" key={item.year}>
          <p className="min-w-40 font-bold">{item.year}</p>
          <div className="flex flex-col mb-4">
            {item.content.map((v, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: v }} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
