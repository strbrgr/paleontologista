import { ActiveLink } from "./active-link";
import Link from "next/link";

const navItems = [
  { title: "Research Highlights", href: "/research-highlights" },
  { title: "Bio", href: "/biography" },
  { title: "Bibliography", href: "/bibliography" },
  { title: "CV", href: "/cv" },
  { title: "Field Work", href: "/field-work" },
  { title: "O'Connor Lab", href: "/oconnor-lab" },
  { title: "Outreach", href: "/outreach" },
  { title: "Children's Books", href: "/childrens-books" },
  { title: "Contact", href: "/contact" },
];

export function NavigationHeader() {
  return (
    <header className="w-full border-b border-border/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:underline"
        >
          Jingmai O’Connor
        </Link>
        <nav role="navigation" aria-label="Primary Navigation">
          <div className="flex flex-wrap justify-end gap-1">
            {navItems.map((item) => (
              <ActiveLink
                key={item.href}
                href={item.href}
                className="px-2 py-1 text-sm md:text-base"
              >
                {item.title}
              </ActiveLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
