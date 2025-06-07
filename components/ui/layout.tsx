import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-10 md:px-20 lg:px-40 py-20">
      {children}
    </section>
  );
}
