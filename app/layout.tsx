import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibedesign.ro"),
  title: {
    default: "Vibe Design - Servicii Cadastru & Topografie | Autorizat ANCPI",
    template: "%s | Vibe Design Cadastru",
  },
  description:
    "Servicii profesionale de cadastru, intabulare, topografie inginerească și scanare laser 3D în toată România. Autorizat ANCPI, precizie milimetrică garantată.",
  keywords: [
    "cadastru",
    "intabulare",
    "topografie",
    "scanare laser 3D",
    "ANCPI",
    "carte funciară",
    "măsurători topografice",
    "România",
  ],
  authors: [{ name: "Vibe Design" }],
  creator: "Vibe Design",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://vibedesign.ro",
    siteName: "Vibe Design",
    title: "Vibe Design - Servicii Cadastru & Topografie | Autorizat ANCPI",
    description:
      "Servicii profesionale de cadastru, intabulare, topografie inginerească și scanare laser 3D în toată România.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vibe Design - Cadastru & Topografie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Design - Servicii Cadastru & Topografie",
    description: "Servicii profesionale de cadastru și topografie în România. Autorizat ANCPI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vibe Design",
  description:
    "Servicii profesionale de cadastru, intabulare, topografie inginerească și scanare laser 3D în toată România.",
  url: "https://vibedesign.ro",
  logo: "https://vibedesign.ro/logo/VDlogo.png",
  image: "https://vibedesign.ro/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Șos. Constanței nr. 19",
    addressLocality: "Mangalia",
    addressRegion: "Constanța",
    addressCountry: "RO",
  },
  telephone: "+40770556677",
  email: "office@vibe-design.ro",
  areaServed: [
    "București",
    "Cluj-Napoca",
    "Timișoara",
    "Iași",
    "Constanța",
    "Brașov",
    "Craiova",
    "Galați",
    "România",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii Geodezice",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cadastru & Intabulare" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Topografie Inginerească" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scanare Laser 3D" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
