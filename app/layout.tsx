import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    "Servicii profesionale de cadastru, intabulare și topografie în județul Constanța și Dobrogea. Autorizat ANCPI categoria A și B.",
  keywords: [
    "cadastru",
    "intabulare",
    "topografie",
    "cadastru apartament",
    "cadastru teren",
    "dezmembrare teren",
    "alipire teren",
    "certificat de edificare",
    "ANCPI",
    "carte funciară",
    "Constanța",
    "Mangalia",
    "Dobrogea",
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
      "Servicii profesionale de cadastru, intabulare și topografie în județul Constanța și Dobrogea. Autorizat ANCPI. Răspuns rapid pe WhatsApp.",
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DANI Cadastru — Cadastru și Topografie",
      },
    ],
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
    "Servicii profesionale de cadastru, intabulare și topografie în județul Constanța și Dobrogea.",
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
    { "@type": "AdministrativeArea", name: "Județul Constanța" },
    { "@type": "AdministrativeArea", name: "Dobrogea" },
    "Constanța",
    "Mangalia",
    "Năvodari",
    "Medgidia",
    "Cernavodă",
    "Hârșova",
    "Eforie",
    "Techirghiol",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii Cadastrale și Topografice",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Cadastru și Intabulare" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Topografie Inginerească" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Dezmembrări și Alipiri" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Certificat de Edificare" },
      },
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
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!sessionStorage.getItem('dani-loader-shown')){document.documentElement.style.background='#0A0E27';}}catch(e){}})();`,
          }}
        />
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
        {children}
      </body>
    </html>
  );
}
