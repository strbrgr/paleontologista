import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationHeader } from "@/components/ui/navigation-menu";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paleontologista.com"),
  title: {
    default: "Jingmai O'Connor",
    template: "%s | Jingmai O'Connor",
  },
  description:
    "I am Dr. Jingmai O’Connor, Curator of Fossil Reptiles at the Field Museum of Natural History in Chicago.",
  authors: [{ name: "Jingmai O'Connor" }],
  creator: "Jingmai O'Connor",
  openGraph: {
    type: "website",
    siteName: "Jingmai O'Connor",
    title: "Jingmai O'Connor",
    description: "Curator of Fossil Reptiles at the Field Museum of Natural History in Chicago.",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Jingmai O'Connor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jingmai O'Connor",
    description: "Curator of Fossil Reptiles at the Field Museum of Natural History in Chicago.",
    creator: "@paleontologista",
    images: ["https://www.paleontologista.com/opengraph-image.jpg"],
  },
};

function Footer() {
  const links = [
    { name: "Instagram", url: "https://instagram.com/paleontologista" },
    { name: "Facebook", url: "https://www.facebook.com/jingmai.oconnor" },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Jingmai-Oconnor",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=BzgZsCoAAAAJ&hl=en",
    },
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
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-auto">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">
          <NavigationHeader />
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
