export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="py-20 mx-auto max-w-7xl px-4">{children}</section>;
}
