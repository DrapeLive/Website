import React from "react";
import type { Metadata } from "next";
import { IconMail } from "@tabler/icons-react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { JsonLd } from "@/components/json-ld";
import {
  CONTACT_EMAIL,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Drape",
  description:
    "Get in touch with Drape — a software and app development company in Malappuram, Kerala. Tell us about your website, mobile app, or business software project.",
  keywords: [
    "contact Drape",
    "software development company Malappuram",
    "app development Kerala",
    "website development Kerala",
    "hire developers Kerala",
  ],
  openGraph: {
    title: "Contact Drape — Let's build something together",
    description:
      "Tell us about your project. Drape builds custom websites, mobile apps, and business software in Malappuram, Kerala.",
    url: "https://drapelive.in/contact",
    siteName: "Drape",
    images: [
      {
        url: "https://drapelive.in/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Drape",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Drape — Let's build something together",
    description:
      "Tell us about your project. Drape builds custom websites, mobile apps, and business software.",
    images: ["https://drapelive.in/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://drapelive.in/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Drape",
  description:
    "Contact page for Drape, a software and app development company in Malappuram, Kerala.",
  url: `${SITE_URL}/contact`,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
};

const ContactPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={contactPageSchema} />
      <Header />

      <main
        id="main-content"
        className="flex-1 px-5 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="mx-auto max-w-xl lg:mx-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#636B2F]">
                Contact Drape
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
                Tell us what you&apos;re building.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700 md:text-xl">
                Whether it&apos;s a website, a mobile app, or business software,
                we&apos;d love to hear about it. Share a few details and we&apos;ll
                get back to you shortly.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#CFDBC2] px-4 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-[#c3d2b5]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/70">
                  <IconMail size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-normal text-neutral-600">
                    Prefer email?
                  </span>
                  {CONTACT_EMAIL}
                </span>
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
