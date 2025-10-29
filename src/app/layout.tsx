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
  title: "Drape - Software that defines YOU.",
  description:
    "Drape builds custom web and mobile software solutions that elevate your business. From innovative web applications to intuitive mobile interfaces, we handle the software side so you can focus on your business.",
  keywords: [
    "Drape",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX Design",
    "Business Software Solutions",
  ],
  authors: [
    { name: "Fahad", url: "https://justfahad.me" },
    { name: "Muflih", url: "https://muflih.me" },
  ],
  creator: "Drape",
  publisher: "Drape",
  metadataBase: new URL("https:///drapelive.vercel.app"),
  openGraph: {
    title: "Drape - Software that defines YOU.",
    description:
      "Drape builds custom web and mobile software solutions that elevate your business. From innovative web applications to intuitive mobile interfaces, we handle the software side so you can focus on your business.",
    url: "https://drapelive.vercel.app",
    siteName: "Drape",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Drape",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drape - Software that defines YOU.",
    description:
      "Drape builds custom web and mobile software solutions that elevate your business. From innovative web applications to intuitive mobile interfaces, we handle the software side so you can focus on your business.",
    images: ["/opengraph-image.png"],
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
        <meta
          name="google-site-verification"
          content="lCwwvyRbzwwnEKfbKLnbCM2z2wvnaQKevjuLfBD08A8"
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
