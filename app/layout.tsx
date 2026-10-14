import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nselectricals.com"),
  title: "N.S Electrical's | Safe Power | Brighter Tomorrow - Hadapsar, Pune, Maharashtra",
  description: "N.S Electrical's by Shashikant Bahule offers expert house wiring, commercial & industrial electrical work, switchboard installation, lighting solutions, repair & maintenance in Hadapsar, Pune, Maharashtra. Call 8668476768.",
  keywords: [
    "N.S Electrical's",
    "Shashikant Bahule",
    "Electrician in Hadapsar Pune",
    "Electrician in Pune Maharashtra",
    "House Wiring Hadapsar Pune",
    "Commercial Electrical Solutions Pune",
    "Industrial Electrical Pune Maharashtra",
    "Switch Board Installation Hadapsar",
    "Lighting Solutions Pune",
    "Electrical Repair and Maintenance",
    "New Electrical Installation",
    "Electrical Upgradation",
    "Safe Power Brighter Tomorrow",
    "Best electrician near me Hadapsar",
  ],
  authors: [{ name: "Shashikant Bahule" }],
  creator: "Shashikant Bahule",
  publisher: "N.S Electrical's",
  category: "Electrical Services",
  classification: "Electrician & Electrical Contractor",
  alternates: {
    canonical: "https://nselectricals.com",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "N.S Electrical's | Electrical Solutions in Hadapsar, Pune, Maharashtra",
    description: "Your trusted electrical partner for home & business in Hadapsar, Pune, Maharashtra. Quality service, affordable rates & on-time delivery by Shashikant Bahule (8668476768).",
    url: "https://nselectricals.com",
    siteName: "N.S Electrical's",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "N.S Electrical's - Safe Power | Brighter Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N.S Electrical's | Electrician in Hadapsar, Pune, Maharashtra",
    description: "Professional house wiring, commercial & industrial electrical work, lighting, repair & maintenance in Hadapsar, Pune. Call 8668476768.",
    images: ["/images/logo.png"],
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
  "@type": "Electrician",
  "@id": "https://nselectricals.com/#electrician",
  name: "N.S Electrical's",
  alternateName: "NS Electricals",
  url: "https://nselectricals.com",
  logo: "https://nselectricals.com/images/logo.png",
  image: "https://nselectricals.com/images/logo.png",
  description: "N.S Electrical's by Shashikant Bahule offers expert house wiring, commercial & industrial electrical work, switchboard installation, lighting solutions, repair & maintenance in Hadapsar, Pune, Maharashtra.",
  telephone: "+918668476768",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hadapsar",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411028",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5089,
    longitude: 73.9259,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Hadapsar, Pune",
    },
    {
      "@type": "AdministrativeArea",
      name: "Magarpatta, Pune",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kharadi, Pune",
    },
    {
      "@type": "AdministrativeArea",
      name: "Amanora Park Town, Pune",
    },
    {
      "@type": "AdministrativeArea",
      name: "Pune, Maharashtra",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Shashikant Bahule",
    jobTitle: "Lead Electrician & Proprietor",
    telephone: "+918668476768",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Wiring & Rewiring",
          description: "Complete residential house wiring, MCB distribution boards, earthing protection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial & Industrial Electrical Work",
          description: "3-phase power distribution, panel wiring, machinery connections, and load balancing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modern Switch Board Installation",
          description: "Installation of modular switchboards, touch switches, and safety breakers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lighting Solutions & False Ceiling Lights",
          description: "LED profile lighting, ambient spots, chandelier fittings, and decorative lights.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Electrical Repair & Maintenance",
          description: "Quick fault finding, short circuit resolution, tripping breaker repair, and routine checks.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#334155] bg-white selection:bg-[#FACC15] selection:text-[#0B192C]">
        {children}
      </body>
    </html>
  );
}
