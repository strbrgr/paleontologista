import { outreach } from "../cv/outreach";

export const metadata = {
  title: "Outreach",
  description: 'Every once in a while I take part in outreach work.',
}

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto">
      <p className="mb-12">In order to maximize the impact of scientific research and utilize the power of paleontology as a gateway science, I happily engage in outreach as opportunities arise. This includes popular science articles, guest blogs (yes blogs!), responding to emails from students of all ages (go on, write me!), collections tours, and classroom visits.</p>
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
