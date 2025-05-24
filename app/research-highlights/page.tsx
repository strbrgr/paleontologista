import { getResearchHighlights } from '@/app/research-highlights/utils'
import Link from 'next/link'
import { HeaderFour } from '@/components/ui/typography'
import Image from 'next/image'
import { getImageFromKey } from './image-map'

export const metadata = {
  title: 'Research Highlights - Jingmai O\'Connor',
  description: 'Read my blog.',
}

export default function Page() {
  const allResearchHighlights = getResearchHighlights()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {allResearchHighlights
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, idx) => (
          <Link
            key={post.slug}
            className="flex flex-col max-w-sm h-full"
            href={`/research-highlights/${post.slug}`}
          >
            <div className="aspect-[4/3] w-full relative">
              <Image
                src={getImageFromKey(post.metadata.staticImportLookupKey)}
                alt={post.metadata.imageAlt}
                width={500}
                height={500}
                placeholder="blur"
                priority={idx < 3}
              />
            </div>
            <div className="flex flex-col flex-grow mt-4">
              <HeaderFour text={post.metadata.title} />
              <p className='flex-grow'>{post.metadata.summary}</p>
            </div>
          </Link>
        ))}
    </section>
  )
}
