import { ActiveLink } from './active-link';

const navItems = [
  { title: "Home", href: "/" },
  { title: "Research", href: "/research" },
  { title: "Bio", href: "/biography" },
  { title: "Bibliography", href: "/bibliography" },
  { title: "CV", href: "/cv" },
  { title: "Field Work", href: "/field-work" },
  { title: "O'Connor Lab", href: "/oconnor-lab" },
  { title: "Outreach", href: "/outreach" },
  { title: "Contact", href: "/contact" },
];

export function NavigationHeader() {
  return (
    <nav className="flex flex-1 items-center justify-center py-2" role="navigation" aria-label="Primary Navigation">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <ActiveLink
            key={item.href}
            href={item.href}
            className="mx-1"
            aria-current={typeof window !== 'undefined' && window.location.pathname === item.href ? 'page' : undefined}
          >
            {item.title}
          </ActiveLink>
        ))}
      </div>
    </nav>
  );
}

