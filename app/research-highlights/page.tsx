import { getResearchHighlights } from '@/app/research-highlights/utils'
import Link from 'next/link'
import { CustomImage, ImageType } from '@/components/ui/image'
import { HeaderFour } from '@/components/ui/typography'

export const metadata = {
  title: 'Research Highlights - Jingmai O\'Connor',
  description: 'Read my blog.',
}

export default function Page() {
  const allResearchHighlights = getResearchHighlights()

  return (
    <section className="flex justify-center flex-row gap-14 flex-wrap">
      {allResearchHighlights
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 max-w-sm"
            href={`/research-highlights/${post.slug}`}
          >
            {/* TODO: Make above the fold image priority true other ones should be false */}
            <CustomImage src={post.metadata.imageUrl} alt={post.metadata.imageAlt} blurDataUrl={post.metadata.blurDataUrl} type={ImageType.Square} priority={false} />
            <div className="w-full flex mt-8 flex-col space-x-0 md:space-x-2">
              <HeaderFour text={post.metadata.title} />
              <p>{post.metadata.summary}</p>
            </div>
          </Link>
        ))
      }
    </section>
  )
}
