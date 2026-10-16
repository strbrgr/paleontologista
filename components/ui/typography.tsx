import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize =
  | "display"
  | "section"
  | "intro"
  | "subsection"
  | "label"
  | "small";

const headingStyles: Record<HeadingSize, string> = {
  display: "mb-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight",
  section: "mb-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
  intro: "mb-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight",
  subsection: "mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight",
  label: "mb-2 text-xl md:text-2xl lg:text-3xl font-semibold leading-snug tracking-tight",
  small: "mb-1 text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight",
};

type HeadingProps = {
  as?: HeadingTag;
  size?: HeadingSize;
  text?: string;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"h2">, "children" | "className">;

export function Heading({
  as = "h2",
  size = "section",
  text,
  children,
  className,
  ...rest
}: HeadingProps) {
  const Tag = as;

  return (
    <Tag className={cn(headingStyles[size], className)} {...rest}>
      {children ?? text}
    </Tag>
  );
}
