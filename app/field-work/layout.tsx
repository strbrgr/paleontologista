export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="px-40 py-20">
      {children}
    </section>
  );
}
