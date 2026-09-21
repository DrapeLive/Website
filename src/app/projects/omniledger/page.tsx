import React from "react";
import {
    IconArrowLeft,
    IconClock,
    IconCalculator,
    IconFileText,
    IconWallet,
    IconShieldLock,
    IconAccessible,
    IconBuildingStore,
    IconShoppingBag,
    IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Omni Ledger — Digital Billing System | Drape",
    description:
        "Omni Ledger is a complete digital billing system for shop owners and small businesses — manage products and prices, create professional bills in seconds, track paid and unpaid bills, and send every bill to customers via SMS.",
    keywords: [
        "billing system",
        "digital billing",
        "shop billing software",
        "billing app",
        "invoicing",
        "small business billing",
        "sale billing",
        "SMS bills",
    ],
    openGraph: {
        title: "Omni Ledger — Digital Billing System | Drape",
        description:
            "Register your shop, manage products, create professional bills in seconds, and send every bill to customers via SMS.",
        url: "https://drapelive.in/projects/omniledger",
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
        title: "Omni Ledger — Digital Billing System | Drape",
        description:
            "Professional digital billing for shop owners and small businesses.",
        images: ["https://drapelive.in/projects/omniledger/logo.png"],
    },
    alternates: {
        canonical: "https://drapelive.in/projects/omniledger",
    },
};

const OmniLedgerPage: React.FC = () => {
    const capabilities = [
        "Register your shop account securely.",
        "Manage your products (items) along with their prices.",
        "Create professional bills for customers in seconds.",
        "Track which bills have been paid and which are still unpaid.",
        "Send a copy of every bill directly to the customer's mobile phone through SMS.",
        "All calculations handled automatically — no errors in totals or missing items.",
    ];

    const users = [
        {
            icon: <IconBuildingStore size={32} className="text-black" />,
            title: "Shop Owners",
            description:
                "Register their shop securely and manage day-to-day sales from a single, simple platform.",
        },
        {
            icon: <IconShoppingBag size={32} className="text-black" />,
            title: "Small Retailers & Merchants",
            description:
                "Grocery stores, general stores, boutiques and similar small businesses that sell repeatedly to customers.",
        },
        {
            icon: <IconUsers size={32} className="text-black" />,
            title: "Customers",
            description:
                "Receive their bill directly on their mobile phone via SMS for a more professional and transparent experience.",
        },
    ];

    const advantages = [
        {
            icon: <IconClock size={32} className="text-black" />,
            title: "Saves Time and Effort",
            description:
                "Creating a bill is fast and easy. Prices are calculated automatically, so shop owners can serve more customers with less hassle.",
        },
        {
            icon: <IconCalculator size={32} className="text-black" />,
            title: "No More Calculation Errors",
            description:
                "Because the system computes every total itself, mistakes in addition or multiplication are eliminated completely.",
        },
        {
            icon: <IconFileText size={32} className="text-black" />,
            title: "Clean Digital Records",
            description:
                "Every bill created is stored safely, creating a reliable history of all sales. No more piles of paper receipts.",
        },
        {
            icon: <IconWallet size={32} className="text-black" />,
            title: "Easy Payment Tracking",
            description:
                "Bills can be marked as paid or unpaid, making it simple to see at a glance which customers have settled their dues and which payments are still pending.",
        },
        {
            icon: <IconShieldLock size={32} className="text-black" />,
            title: "Secure and Private",
            description:
                "Each shop owner has their own protected account, so business records are kept private and accessible only to the owner.",
        },
        {
            icon: <IconAccessible size={32} className="text-black" />,
            title: "Simple and Accessible",
            description:
                "The system is designed to be easy to use, so no technical knowledge or training is required to start managing bills effectively.",
        },
    ];

    const screenshots = [
        "/projects/omniledger/screen_shot1.jpg",
        "/projects/omniledger/screen_shot2.jpg",
        "/projects/omniledger/screen_shot3.jpg",
    ];

    return (
        <div className="min-h-screen bg-beige-light">
            <header className="fixed top-0 left-0 right-0 z-50 bg-beige-light">
                <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
                    >
                        <IconArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </header>

            <main className="pt-24 md:pt-32 px-5 md:px-0 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center">
                            <Image
                                src="/projects/omniledger/logo.png"
                                alt="Omni Ledger logo"
                                width={128}
                                height={128}
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Omni Ledger
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600">
                                Digital Billing System for Shop Owners
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                About
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Omni Ledger is a complete digital billing system
                                designed specifically for shop owners and small
                                businesses. It replaces the traditional
                                pen-and-paper billing with a modern,
                                simple-to-use platform that:
                            </p>
                            <ul className="space-y-3 mt-6">
                                {capabilities.map((capability, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-lg text-gray-700"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#636B2F] rounded-full mt-2.5 flex-shrink-0" />
                                        {capability}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Who Uses Omni Ledger?
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {users.map((user, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <div className="w-14 h-14 bg-[#CFDBC2] rounded-full flex items-center justify-center mb-4">
                                            {user.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {user.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {user.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Advantages
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {advantages.map((advantage, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <div className="w-14 h-14 bg-[#CFDBC2] rounded-full flex items-center justify-center mb-4">
                                            {advantage.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {advantage.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {advantage.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Screenshots
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {screenshots.map((src, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl overflow-hidden border border-gray-100"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Omni Ledger screenshot ${
                                                index + 1
                                            }`}
                                            width={300}
                                            height={640}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="text-center">
                            <Link
                                href="/projects/omniledger/privacy"
                                className="text-gray-500 underline underline-offset-2 hover:text-gray-700 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OmniLedgerPage;