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
  ],
  authors: [{ name: "Shashikant Bahule" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "N.S Electrical's | Electrical Solutions in Hadapsar, Pune, Maharashtra",
    description: "Your trusted electrical partner for home & business in Hadapsar, Pune, Maharashtra. Quality service, affordable rates & on-time delivery by Shashikant Bahule (8668476768).",
    url: "https://nselectricals.com",
    siteName: "N.S Electrical's",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-[#334155] bg-white selection:bg-[#FACC15] selection:text-[#0B192C]">
        {children}
      </body>
    </html>
  );
}
