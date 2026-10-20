import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Polisum Kallanum | Drape",
    description:
        "Privacy policy for Polisum Kallanum (പോലീസും കള്ളനും) — a traditional Kerala paper game for Android.",
    openGraph: {
        title: "Privacy Policy — Polisum Kallanum | Drape",
        description:
            "Privacy policy for Polisum Kallanum (പോലീസും കള്ളനും) — a traditional Kerala paper game for Android.",
        url: "https://drapelive.in/projects/polisum_kallanum/privacy",
        siteName: "Drape",
        images: [
            {
                url: "https://drapelive.in/projects/polisum_kallanum/banner.png",
                width: 1200,
                height: 630,
                alt: "Polisum Kallanum banner",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy — Polisum Kallanum | Drape",
        description:
            "Privacy policy for Polisum Kallanum — a traditional Kerala paper game.",
        images: [
            "https://drapelive.in/projects/polisum_kallanum/banner.png",
        ],
    },
    alternates: {
        canonical:
            "https://drapelive.in/projects/polisum_kallanum/privacy",
    },
};

const PrivacyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-beige-light">
            <header className="fixed top-0 left-0 right-0 z-50 bg-beige-light">
                <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
                    <Link
                        href="/projects/polisum_kallanum"
                        className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
                    >
                        <IconArrowLeft size={20} />
                        Back to Polisum Kallanum
                    </Link>
                </div>
            </header>

            <main className="pt-24 md:pt-32 px-5 md:px-0 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 mb-12">
                        <strong>Last updated:</strong> October 19, 2026
                    </p>

                    <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Introduction
                            </h2>
                            <p>
                                Polisum Kallanum (പോലീസും കള്ളനും,
                                &quot;we&quot;, &quot;our&quot;,
                                &quot;the app&quot;) is a traditional Kerala
                                paper game digitised for Android, developed
                                and published by{" "}
                                <strong>Drape (drapelive)</strong>. This
                                privacy policy explains how we handle your
                                information when you use the app.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Data We Collect
                            </h2>

                            <h3 className="text-xl font-bold mb-2">
                                No Personal Data Collected
                            </h3>
                            <p className="mb-4">
                                Polisum Kallanum does{" "}
                                <strong>not</strong> collect, transmit, or
                                share any personal data. The app does not
                                require account registration, does not use
                                analytics SDKs, and does not contact any
                                external server during normal gameplay.
                            </p>

                            <h3 className="text-xl font-bold mb-2">
                                Data Stored Locally on Device
                            </h3>
                            <p className="mb-4">
                                The following data is saved locally on your
                                device solely to preserve your preferences
                                between sessions. It is{" "}
                                <strong>never</strong> transmitted to any
                                server or third party:
                            </p>

                            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <table className="w-full text-base">
                                    <thead>
                                        <tr className="bg-[#CFDBC2]">
                                            <th className="text-left py-3 px-4 font-bold">
                                                Data
                                            </th>
                                            <th className="text-left py-3 px-4 font-bold">
                                                Purpose
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-gray-100">
                                            <td className="py-3 px-4 font-medium">
                                                Player names entered in the
                                                app
                                            </td>
                                            <td className="py-3 px-4">
                                                Displaying player list during
                                                the game session
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-100">
                                            <td className="py-3 px-4 font-medium">
                                                Round scores and total scores
                                            </td>
                                            <td className="py-3 px-4">
                                                Tracking in-game scoreboard
                                                across rounds
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-100">
                                            <td className="py-3 px-4 font-medium">
                                                Number of rounds played
                                            </td>
                                            <td className="py-3 px-4">
                                                Game progress within a
                                                session
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-100">
                                            <td className="py-3 px-4 font-medium">
                                                Sound / vibration preferences
                                            </td>
                                            <td className="py-3 px-4">
                                                Persisting user settings
                                                between sessions
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                All locally stored data is cleared when you
                                uninstall the app or clear app data from your
                                device settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Third-Party Services
                            </h2>
                            <p>
                                Polisum Kallanum does{" "}
                                <strong>not</strong> integrate any
                                third-party SDKs for analytics, advertising,
                                crash reporting, or tracking. No data is
                                shared with any third party.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Internet Permission
                            </h2>
                            <p>
                                The app does not request internet permission
                                and does not make any network connections.
                                All gameplay is entirely offline.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Children&apos;s Privacy
                            </h2>
                            <p>
                                Polisum Kallanum is designed for general
                                audiences including children. The app does
                                not knowingly collect any personal
                                information from any user, child or adult.
                                No account creation, name, email, or device
                                identifier is collected or transmitted.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Your Rights and Choices
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Clear local data:</strong> You
                                    can clear all locally stored game data
                                    at any time through your device&apos;s
                                    app settings (Settings → Apps → Polisum
                                    Kallanum → Clear Data).
                                </li>
                                <li>
                                    <strong>Uninstall:</strong> Uninstalling
                                    the app removes all locally stored data
                                    from your device permanently.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Changes to This Policy
                            </h2>
                            <p>
                                We may update this privacy policy from time
                                to time. Any changes will be reflected on
                                this page and on the Google Play Store
                                listing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-black">
                                Contact
                            </h2>
                            <p>
                                For questions about this privacy policy,
                                please contact the developer through the
                                Google Play Store listing page or reach out
                                via the{" "}
                                <Link
                                    href="/"
                                    className="underline underline-offset-2 hover:text-gray-900"
                                >
                                    Drape website
                                </Link>
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
