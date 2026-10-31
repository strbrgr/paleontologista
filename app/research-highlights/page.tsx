import Link from "next/link";
import Image from "next/image";
import { researchHighlights } from "@/lib/research-highlights";

export const metadata = {
  title: "Research Highlights",
  description: "Read more about my most recent research.",
  alternates: {
    canonical: "/research-highlights",
  },
  openGraph: {
    type: "website" as const,
    url: "/research-highlights",
    title: "Research Highlights",
    description: "Read more about Jingmai O'Connor's research.",
  },
};

export default function Page() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {researchHighlights.map((post, idx) => (
        <Link
          key={post.slug}
          className="flex flex-col max-w-sm h-full transform transition-transform duration-200 hover:scale-[1.01] mb-12"
          href={`/research-highlights/${post.slug}`}
        >
          <div className="aspect-[1/1] w-full relative">
            <Image
              src={post.image}
              alt={post.alt}
              width={500}
              height={500}
              placeholder="blur"
              preload={idx < 3}
            />
          </div>
          <div className="flex flex-col flex-grow mt-4">
            <h2
              className="min-h-[4.5rem] line-clamp-2 text-2xl md:text-3xl
                font-semibold leading-tight tracking-tight"
              title={post.title}
            >
              {post.title}
            </h2>
            <p className="mt-3 line-clamp-3 min-h-[5.25rem] leading-relaxed">
              {post.summary}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
