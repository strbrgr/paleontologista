import Image from "next/image";
import { outreach } from "@/app/cv/outreach";
import outreach_img from '@/app/outreach/img/outreach.jpg';
import Layout from "@/components/ui/layout";

export const metadata = {
  title: "Outreach",
  description: 'Every once in a while I take part in outreach work.',
}

export default function Page() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto">
        <p className="mb-12">In order to maximize the impact of scientific research and utilize the power of paleontology as a gateway science, I happily engage in outreach as opportunities arise. This includes popular science articles, guest blogs (yes blogs!), responding to emails from students of all ages (go on, write me!), collections tours, and classroom visits.</p>

        <div className="relative w-[375px] h-[500px] shrink-0 mx-auto mb-12">
          <Image src={outreach_img} alt="Photo of Jingmai O'Connor doing outreach work in front of a group of children" width={375} height={500} placeholder="blur" priority={true} />
        </div>

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
    </Layout>
  )
}
