import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
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
  metadataBase: new URL("https://drapelive.vercel.app"),

  title: {
    default: "Drape — Software that defines YOU.",
    template: "%s | Drape",
  },

  description:
    "Drape is a software and app development company based in Malappuram, Kerala, India. We build custom websites, mobile apps, and business software that modernise small and medium businesses — so you can focus on growth.",

  keywords: [
    "Drape",
    "software development company in Malappuram",
    "app development Kerala",
    "website development company in India",
    "mobile app development Kerala",
    "IT company Malappuram",
    "custom software Kerala",
    "Flutter app developer India",
    "business analytics Kerala",
    "React",
    "Next.js",
    "Django",
    "UI/UX Design",
  ],

  authors: [
    { name: "Fahad", url: "https://justfahad.me" },
    { name: "Muflih", url: "https://muflih.me" },
  ],
  creator: "Drape",
  publisher: "Drape",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://drapelive.vercel.app",
  },

  openGraph: {
    title: "Drape — Software that defines YOU.",
    description:
      "Custom websites, mobile apps, and business software built by Drape — a software development company in Malappuram, Kerala. We handle the tech so you can focus on your business.",
    url: "https://drapelive.vercel.app",
    siteName: "Drape",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://drapelive.vercel.app/opengraph-image.jpg",
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
    images: ["https://drapelive.vercel.app/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*Drape's account google search console*/}
        <meta
          name="google-site-verification"
          content="buQyx0f3emsnqiaWiw2TxBCYLEwbDl--60Ptyc356Ls"
        />
        <meta name="apple-mobile-web-app-title" content="Drape" />
      </head>
      <body
        className={`${alegreya.variable} ${alegreyaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
