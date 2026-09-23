import React from "react";
import {
    IconArrowLeft,
    IconAccessible,
    IconChartPie,
    IconPigMoney,
    IconRefresh,
    IconSettings,
    IconLock,
    IconDeviceMobile,
    IconUser,
    IconSchool,
    IconBriefcase,
    IconCash,
    IconUsers,
    IconSparkles,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paisa Book — Expense Tracker | Drape",
    description:
        "Paisa Book is a personal finance management app to track income and expenses — record transactions in seconds, organise spending by categories, and see a clear overview of your finances with charts.",
    keywords: [
        "expense tracker",
        "expense manager",
        "money management",
        "personal finance",
        "income expense app",
        "budgeting app",
        "spending tracker",
        "paisa book",
        "flutter app",
    ],
    openGraph: {
        title: "Paisa Book — Expense Tracker | Drape",
        description:
            "A friendly money manager — track income and expenses, organise by category, and understand where your money goes.",
        url: "https://drapelive.in/projects/paisabook",
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
        title: "Paisa Book — Expense Tracker | Drape",
        description:
            "A simple, clean, and user-friendly money manager for everyone.",
        images: ["https://drapelive.in/projects/paisabook/banner.png"],
    },
    alternates: {
        canonical: "https://drapelive.in/projects/paisabook",
    },
};

const PaisaBookPage: React.FC = () => {
    const capabilities = [
        "Add your everyday income and expenses in just a few taps.",
        "Edit or delete a transaction whenever you make a mistake.",
        "Group your spending into categories so you can clearly see where your money goes each month — food, transport, bills, entertainment, salary, and more.",
        "View a dashboard with summaries and charts that show your spending patterns and monthly totals at a glance.",
        "Create your own account so your data is personal and private.",
        "Enjoy a smooth onboarding flow — everything is designed to be intuitive, with no complicated financial knowledge needed.",
    ];

    const users = [
        {
            icon: <IconUser size={32} className="text-black" />,
            title: "Individuals",
            description:
                "People who want to manage their personal daily money — income and expenses.",
        },
        {
            icon: <IconSchool size={32} className="text-black" />,
            title: "Students",
            description:
                "Students who need to track their allowance and monthly spending.",
        },
        {
            icon: <IconBriefcase size={32} className="text-black" />,
            title: "Young Professionals",
            description:
                "Young professionals who want to build better saving habits early.",
        },
        {
            icon: <IconCash size={32} className="text-black" />,
            title: "Salaried Workers",
            description:
                "Employees who want to see exactly where their salary goes each month.",
        },
        {
            icon: <IconUsers size={32} className="text-black" />,
            title: "Families & Households",
            description:
                "Small family or household members who want a shared, simple record of spending by category.",
        },
        {
            icon: <IconSparkles size={32} className="text-black" />,
            title: "Anyone",
            description:
                "Anyone who wants to understand and improve their personal finances without complicated banking or accounting software.",
        },
    ];

    const advantages = [
        {
            icon: <IconAccessible size={32} className="text-black" />,
            title: "Easy to Use",
            description:
                "Clean, modern design with a simple flow, so anyone can start tracking their money within seconds.",
        },
        {
            icon: <IconChartPie size={32} className="text-black" />,
            title: "Clear Money Picture",
            description:
                "Summaries, categories, and charts show exactly where money is coming from and where it is going.",
        },
        {
            icon: <IconPigMoney size={32} className="text-black" />,
            title: "Better Budgeting Habits",
            description:
                "Tracking spending by category helps users spot unnecessary expenses and save more.",
        },
        {
            icon: <IconRefresh size={32} className="text-black" />,
            title: "Always in Sync",
            description:
                "Because data is stored on a backend server, your records are kept safely and are not lost if you reinstall or change devices.",
        },
        {
            icon: <IconSettings size={32} className="text-black" />,
            title: "Full Control",
            description:
                "Add, edit, and delete transactions freely, plus manage your own accounts and categories to fit your personal needs.",
        },
        {
            icon: <IconLock size={32} className="text-black" />,
            title: "Privacy",
            description:
                "Each user logs in to their own account, so personal financial data is never mixed with other users.",
        },
        {
            icon: <IconDeviceMobile size={32} className="text-black" />,
            title: "Cross-Platform",
            description:
                "Built with Flutter, so the same app experience works on both Android and iOS.",
        },
    ];

    const techStack = ["Flutter", "Django", "Python", "REST API"];

    const screenshots = [
        "/projects/paisabook/screenshot1.jpg",
        "/projects/paisabook/screenshot2.jpg",
        "/projects/paisabook/screenshot3.jpg",
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
                                src="/projects/paisabook/logo.jpg"
                                alt="Paisa Book logo"
                                width={128}
                                height={128}
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Paisa Book
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600">
                                Expense Tracker — Personal Finance Manager
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                About
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Paisa Book is a personal finance management
                                application that helps people keep track of
                                their income and expenses. Users can record how
                                much money comes in and goes out, organize
                                everything by category (like food,
                                transportation, salary, bills, and so on), and
                                see an overview of their financial situation. It
                                is built as a mobile app-style application with
                                a Flutter frontend and a Django backend that
                                stores all the data safely on a server.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mt-4 mb-6">
                                Imagine a digital notebook for your wallet. A
                                simple, clean, and user-friendly money manager
                                where you can:
                            </p>
                            <ul className="space-y-3">
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
                            <p className="text-lg text-gray-600 leading-relaxed mt-6">
                                It feels like a friendly assistant that quietly
                                watches your spending and helps you make better
                                money decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Who Uses Paisa Book?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-white px-4 py-2 rounded-full text-lg font-medium border border-gray-200"
                                    >
                                        {tech}
                                    </span>
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
                                            alt={`Paisa Book screenshot ${
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
                                href="/projects/paisabook/privacy"
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

export default PaisaBookPage;