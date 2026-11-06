import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Noto_Serif, Tiro_Devanagari_Marathi } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import MobileCallBar from "@/components/MobileCallBar";
import { COMPANY_INFO } from "@/data/company";

// P-TAL.in Exact Primary Brand Font (AktivGrotesk)
const aktivGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/AktivGrotesk-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/AktivGrotesk-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/AktivGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AktivGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/AktivGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/AktivGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aktiv",
  display: "swap",
});

// P-TAL.in Secondary Editorial Accent Serif
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Traditional Marathi Calligraphy
const tiroMarathi = Tiro_Devanagari_Marathi({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C85A17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://harikrupa-musical.vercel.app"),
  title: {
    default: "Harikrupa Musical Works | Master Handcrafted Dhol & Tasha Makers in Miraj",
    template: "%s | Harikrupa Musical Works (Miraj)",
  },
  description:
    "30+ years of handcrafted Indian percussion from Miraj, Maharashtra. Specialized in Puneri Dhol, high-tension Tashas, Sambal, treated leather plates, and wholesale Mandal supplies.",
  keywords: [
    "Harikrupa Musical Works",
    "Miraj musical instruments",
    "Puneri Dhol manufacturer",
    "Dhol Tasha Pathak supplier",
    "Tasha manufacturer Miraj",
    "Dhol plates leather",
    "Sambal pair Miraj",
    "Dhol masala paste",
    "Maharashtra musical instruments wholesale",
    "Miraj instruments shop",
  ],
  authors: [{ name: "Harikrupa Musical Works" }],
  openGraph: {
    title: "Harikrupa Musical Works — Miraj Artisans (30+ Years)",
    description:
      "Handcrafted Indian percussion instruments directly from the master artisans of Miraj. Bulk supply for Dhol Tasha Pathaks & Wholesalers.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.marathiName,
    description: COMPANY_INFO.shortDesc,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.pincode,
      addressCountry: "IN",
    },
    telephone: COMPANY_INFO.contacts[0].number,
    openingHours: "Mo-Sa 09:00-21:00, Su 10:00-18:00",
    priceRange: "₹₹",
    areaServed: "Pan-India",
  };

  return (
    <html
      lang="en"
      className={`${aktivGrotesk.variable} ${notoSerif.variable} ${tiroMarathi.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-[#FFF6EB] text-[#171513] antialiased selection:bg-[#B22B15] selection:text-white pb-16 md:pb-0 relative">
        {/* Global Micro-Fiber Handmade Paper Grain Texture Overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-40 bg-paper-grain opacity-[0.035] mix-blend-multiply"
          aria-hidden="true"
        />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <MobileCallBar />
      </body>
    </html>
  );
}
