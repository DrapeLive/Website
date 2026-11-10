import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { siteSchema } from "@/lib/schema";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
});

const alegreyaSans = Alegreya_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-alegreya-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drapelive.in"),

  title: {
    default: "Drape — Software that defines YOU.",
    template: "%s | Drape",
  },

  description:
    "Drape is a software and app development company in Malappuram, Kerala. We build custom websites, mobile apps, and business software for growing businesses.",

  authors: [
    { name: "Fahad", url: "https://justfahad.me" },
    { name: "Muflih", url: "https://muflih.me" },
  ],
  creator: "Drape",
  publisher: "Drape",

  applicationName: "Drape",

  verification: {
    google: "buQyx0f3emsnqiaWiw2TxBCYLEwbDl--60Ptyc356Ls",
  },

  appleWebApp: {
    title: "Drape",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Drape — Software that defines YOU.",
    description:
      "Custom websites, mobile apps, and business software built by Drape in Malappuram, Kerala. We handle the tech so you can focus on your business.",
    url: "/",
    siteName: "Drape",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://drapelive.in/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drape — Software Development Company in Malappuram, Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Drape — Software that defines YOU.",
    description:
      "Custom websites, mobile apps, and business software built by Drape — a software development company in Malappuram, Kerala.",
    images: ["https://drapelive.in/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreya.variable} ${alegreyaSans.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={siteSchema} />
        {children}
      </body>
    </html>
  );
}
