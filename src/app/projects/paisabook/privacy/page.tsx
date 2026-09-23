import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Paisa Book | Drape",
  description:
    "Privacy policy for Paisa Book — a money management and expense tracking app.",
  openGraph: {
    title: "Privacy Policy — Paisa Book | Drape",
    description:
      "Privacy policy for Paisa Book — a money management and expense tracking app.",
    url: "https://drapelive.in/projects/paisabook/privacy",
    siteName: "Drape",
    images: [
      {
        url: "https://drapelive.in/projects/paisabook/banner.png",
        width: 1774,
        height: 887,
        alt: "Paisa Book banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Paisa Book | Drape",
    description:
      "Privacy policy for Paisa Book — a money management and expense tracking app.",
    images: ["https://drapelive.in/projects/paisabook/banner.png"],
  },
  alternates: {
    canonical: "https://drapelive.in/projects/paisabook/privacy",
  },
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <header className="fixed top-0 left-0 right-0 z-50 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
          <Link
            href="/projects/paisabook"
            className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
          >
            <IconArrowLeft size={20} />
            Back to Paisa Book
          </Link>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-5 md:px-0 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">
            <strong>Last updated:</strong> September 23, 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Introduction
              </h2>
              <p>
                Paisa Book (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;)
                is a money management and expense tracking app developed and
                published by <strong>drapelive</strong>. It helps individuals and
                small business owners record income, expenses, budgets, and
                pending payments in one place. This privacy policy explains how
                we collect, use, and protect your data when you use the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data We Collect
              </h2>

              <h3 className="text-xl font-bold mb-2">
                Account Information
              </h3>
              <p className="mb-4">
                When you create an account, we collect the details needed to set
                it up and keep it secure, such as your name, an email address or
                phone number, and your login credentials. This information is
                required to run your account and keep your financial records
                private to you.
              </p>

              <h3 className="text-xl font-bold mb-2">
                Financial Records You Enter
              </h3>
              <p>
                We store the financial records you enter, including your income,
                expenses, categories, budgets, savings goals, and any notes or
                pending payment details you add. These records are yours and are
                used only to provide the app&apos;s features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                How We Use Your Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account management:</strong> Your account details and
                  credentials are used to secure your data and keep it accessible
                  only to you.
                </li>
                <li>
                  <strong>Expense tracking:</strong> Your financial records are
                  used to produce balances, summaries, categories, budgets, and
                  reports within the app.
                </li>
                <li>
                  <strong>Pending payments:</strong> Records of pending or unpaid
                  amounts are used to help you track who owes you and what you
                  owe.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Third-Party Services
              </h2>
              <p className="mb-2">
                Paisa Book does not use advertising, analytics, or tracking
                SDKs. Your financial records are never sold, rented, or shared
                with anyone for marketing purposes.
              </p>
              <p>
                If we use a third-party service for essential features such as
                account login or data backup, we ensure that any data shared with
                the provider is limited to what is strictly necessary to operate
                the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data Security
              </h2>
              <p>
                Access to your account and financial records is protected by your
                login credentials, and all communication with our servers is
                encrypted using HTTPS. We apply reasonable technical measures to
                protect your data from unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Data Retention and Deletion
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Your records:</strong> Your account details and
                  financial records remain stored for as long as your account is
                  active.
                </li>
                <li>
                  <strong>Deletion:</strong> To close your account and have your
                  records deleted, or to request the removal of specific entries,
                  please contact us using the details below.
                </li>
                <li>
                  <strong>Uninstall:</strong> You may stop using the app at any
                  time, though your stored records may remain on our servers
                  until you request deletion.
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
                  your account details and financial records within the app.
                </li>
                <li>
                  <strong>Export your data:</strong> You can request a copy of
                  the data stored for your account at any time.
                </li>
                <li>
                  <strong>Data deletion:</strong> You can request deletion of
                  your account and related records by contacting us.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Children&apos;s Privacy
              </h2>
              <p>
                Paisa Book is intended for general personal and small business
                use. It is not directed at children, and we do not knowingly
                collect personal information from children.
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