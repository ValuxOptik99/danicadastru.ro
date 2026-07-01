import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SiteLoader } from "@/components/loading/SiteLoader";
import { CookieBanner } from "@/components/cookies/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danicadastru.ro"),
  title: {
    default: "DANI Cadastru — Servicii Cadastru, Intabulare și Topografie | Autorizat ANCPI",
    template: "%s | DANI Cadastru",
  },
  description:
    "Servicii profesionale de cadastru, intabulare și topografie inginerească în județul Constanța și Dobrogea. Autorizat ANCPI clasa A și B, precizie milimetrică garantată.",
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
  authors: [{ name: "DANI Cadastru", url: "https://danicadastru.ro" }],
  creator: "DANI Cadastru",
  publisher: "VIBE DESIGN GLOW SRL",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://danicadastru.ro",
    siteName: "DANI Cadastru",
    title: "DANI Cadastru — Servicii Cadastru, Intabulare și Topografie",
    description:
      "Servicii profesionale de cadastru, intabulare și topografie. Autorizat ANCPI. Răspuns rapid pe WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DANI Cadastru — Servicii Cadastru și Topografie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DANI Cadastru — Servicii Cadastru și Topografie",
    description: "Servicii profesionale de cadastru, intabulare și topografie. Autorizat ANCPI.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DANI Cadastru — Cadastru și Topografie" }],
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
  name: "DANI Cadastru",
  description:
    "Servicii profesionale de cadastru, intabulare și topografie inginerească în județul Constanța și Dobrogea.",
  url: "https://danicadastru.ro",
  logo: "https://danicadastru.ro/logo/logo_dani.png",
  image: "https://danicadastru.ro/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Șos. Constanței nr. 19",
    addressLocality: "Mangalia",
    addressRegion: "Constanța",
    addressCountry: "RO",
  },
  telephone: "+40770556677",
  email: "office@danicadastru.ro",
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
        {/* FOUC prevention */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!sessionStorage.getItem('dani-loader-shown')){document.documentElement.style.background='#0A0E27';}}catch(e){}})();`,
          }}
        />
        {/* Google Consent Mode v2 — default denied before any gtag fires */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SiteLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
