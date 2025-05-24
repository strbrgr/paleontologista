import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationHeader } from "@/components/ui/navigation-menu";

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
  const links = [
    { name: 'Instagram', url: 'https://instagram.com/paleontologista' },
    { name: 'Twitter', url: 'https://x.com/paleontologista' },
    { name: 'Facebook', url: 'https://x.com/paleontologista' },
    { name: 'ResearchGate', url: 'https://x.com/paleontologista' },
    { name: 'Google Scholar', url: 'https://x.com/paleontologista' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <NavigationHeader />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
