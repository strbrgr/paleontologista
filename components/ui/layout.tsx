import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20 mx-auto max-w-7xl px-4">
      {children}
    </section>
  );
}
