# Paleontologista

Personal website for paleontologist Jingmai O'Connor, built with Next.js, React, TypeScript, and Tailwind CSS.

## Site sections

- Biography
- Research Highlights
- Bibliography
- Curriculum Vitae
- Field Work
- O’Connor Lab
- Outreach
- Children’s Books
- Contact

Research articles live under `app/research-highlights/` and shared research metadata is defined in `lib/research-highlights.ts`.

The project also generates the following SEO endpoints:

- `/sitemap.xml`
- `/robots.txt`

The homepage includes `WebSite` and `Person` JSON-LD structured data.

## Images

The project uses `next/image`. Preferred display dimensions are:

- Square: `500 × 500`
- Vertical: `375 × 500`
- Horizontal: `800 × 600`

When an image’s source aspect ratio differs from one of these display presets, calculate the matching height from the source dimensions rather than stretching or distorting the image.
