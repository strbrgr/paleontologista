"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import path from "path";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ActiveLink({ href, children, className }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/research") {
      return pathname === href || pathname.startsWith("/research/");
    }
    return pathname === href;
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md bg-background py-2 text-sm font-medium transition-colors",
        "hover:text-accent-foreground hover:underline",
        "focus:text-accent-foreground focus:underline focus:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive(href) && "text-accent-foreground underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
