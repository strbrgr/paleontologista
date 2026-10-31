import Link from "next/link";
import { Heading } from "@/components/ui/typography";

export type ExternalLink = {
  label: string;
  href: string;
};

export function ExternalLinks({ links }: { links: ExternalLink[] }) {
  return (
    <>
      <Heading as="h2" size="small" text="Read more" />
      <ul className="list-disc list-inside space-y-1">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
