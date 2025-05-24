import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationHeader } from "@/components/ui/navigation-menu";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paleontologista.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: "Jingmai O'Connor",
    template: "%s | Jingmai O'Connor"
  },
  description: "Paleontologist"
};

function Footer() {
  const links: { name: string, url: string }[] = [
    { name: 'Instagram', url: 'https://instagram.com/paleontologista' },
    { name: 'Twitter', url: 'https://x.com/paleontologista' },
    { name: 'Facebook', url: 'https://www.facebook.com/jingmai.oconnor/' },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Jingmai-Oconnor' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=BzgZsCoAAAAJ&hl=en' },
  ];

  return (
    <footer className="m-6 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-1">
          <NavigationHeader />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
