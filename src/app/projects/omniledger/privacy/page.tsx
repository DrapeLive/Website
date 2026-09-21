import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Omni Ledger | Drape",
  description:
    "Privacy policy for Omni Ledger — a digital billing system for shop owners and small businesses.",
  openGraph: {
    title: "Privacy Policy — Omni Ledger | Drape",
    description:
      "Privacy policy for Omni Ledger — a digital billing system for shop owners and small businesses.",
    url: "https://drapelive.in/projects/omniledger/privacy",
    siteName: "Drape",
    images: [
      {
        url: "https://drapelive.in/projects/omniledger/logo.png",
        width: 1024,
        height: 1024,
        alt: "Omni Ledger logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Omni Ledger | Drape",
    description:
      "Privacy policy for Omni Ledger — a digital billing system for shop owners and small businesses.",
    images: ["https://drapelive.in/projects/omniledger/logo.png"],
  },
  alternates: {
    canonical: "https://drapelive.in/projects/omniledger/privacy",
  },
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <header className="fixed top-0 left-0 right-0 z-50 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
          <Link
            href="/projects/omniledger"
            className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
          >
            <IconArrowLeft size={20} />
            Back to Omni Ledger
          </Link>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-5 md:px-0 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">
            <strong>Last updated:</strong> September 21, 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Introduction
              </h2>
              <p>
                Omni Ledger (&quot;we&quot;, &quot;our&quot;, &quot;the
                app&quot;) is a digital billing system developed and published
                by <strong>drapelive</strong>. It helps shop owners and small
                businesses register their shops, manage products and prices,
                create bills, track payments, and send a copy of every bill to
                their customers through SMS. This privacy policy explains how we
                collect, use, and protect your data when you use the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data We Collect
              </h2>

              <h3 className="text-xl font-bold mb-2">Shop Account Information</h3>
              <p className="mb-4">
                When you register your shop account, we collect the details
                needed to create and secure your account, such as your shop
                name, the owner&apos;s name, a contact number or email, and your
                login credentials. This information is required to operate your
                account and keep your records private to you.
              </p>

              <h3 className="text-xl font-bold mb-2">Product and Business Data</h3>
              <p className="mb-4">
                We store the products and items you add along with their prices,
                as well as every bill you create. This includes the items on
                each bill, quantities, totals, and the payment status (paid or
                unpaid) of each bill.
              </p>

              <h3 className="text-xl font-bold mb-2">Customer Phone Numbers</h3>
              <p>
                To send a copy of a bill to your customer&apos;s mobile phone
                through SMS, you may enter your customer&apos;s phone number.
                Customer phone numbers are collected solely for the purpose of
                delivering the bill and are not used for marketing or shared
                with any unrelated party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                How We Use Your Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account management:</strong> Your account details and
                  credentials are used to secure your shop and keep your records
                  accessible only to you.
                </li>
                <li>
                  <strong>Billing:</strong> Product data and bill records are
                  used to create accurate bills, calculate totals, and maintain
                  a reliable history of your sales.
                </li>
                <li>
                  <strong>Payment tracking:</strong> The paid or unpaid status
                  of each bill is used to show you, at a glance, which customers
                  have settled their dues and which payments are still pending.
                </li>
                <li>
                  <strong>Bill delivery via SMS:</strong> Customer phone numbers
                  are used only to send a copy of the bill to the customer&apos;s
                  mobile phone.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Third-Party Services
              </h2>
              <p className="mb-2">
                Omni Ledger uses a third-party SMS gateway provider to deliver
                bills to your customers&apos; mobile phones. When you choose to
                send a bill by SMS, the bill content and the recipient&apos;s
                phone number are transmitted to the provider solely for the
                purpose of delivering the message.
              </p>
              <p>
                No advertising, analytics, or tracking SDKs are used in the app.
                We do not sell or rent your data, or the data of your customers,
                to anyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data Security
              </h2>
              <p>
                Each shop owner has their own protected account, and all
                communication with our servers is encrypted using HTTPS. Access
                to your account and billing records is restricted to the account
                owner, and we apply reasonable technical measures to protect your
                data from unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data Retention and Deletion
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account and business data:</strong> Your account
                  details, products, and bills remain stored for as long as your
                  account is active.
                </li>
                <li>
                  <strong>Customer phone numbers:</strong> Phone numbers are used
                  solely to deliver bills by SMS and are retained only as needed
                  for that purpose and to maintain your billing history.
                </li>
                <li>
                  <strong>Deletion:</strong> To close your account and have your
                  data deleted, or to request removal of a specific record,
                  please contact us using the details below.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Your Rights and Choices
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access and update:</strong> You can view and correct
                  your shop details, products, and other business information
                  within the app.
                </li>
                <li>
                  <strong>Control SMS delivery:</strong> You decide when and
                  whether a bill is sent to a customer by SMS.
                </li>
                <li>
                  <strong>Data deletion:</strong> You can request deletion of
                  your account and related data at any time by contacting us.
                </li>
                <li>
                  <strong>Uninstall:</strong> You may stop using the app at any
                  time, though your account and billing records may remain on
                  our servers until you request deletion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Children&apos;s Privacy
              </h2>
              <p>
                Omni Ledger is intended for use by shop owners and small
                businesses. It is not directed at children, and we do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be reflected on this page, and the &quot;Last
                updated&quot; date above will be revised accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">Contact</h2>
              <p>
                For questions about this privacy policy or to request data
                deletion, please contact us at{" "}
                <a
                  href="mailto:drapelive@gmail.com"
                  className="underline underline-offset-2 hover:text-gray-900 transition-colors"
                >
                  drapelive@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;