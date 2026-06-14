import React from "react";
import {
    IconArrowLeft,
    IconStar,
    IconShield,
    IconBolt,
    IconBrush,
    IconSticker,
    IconAlertTriangle,
    IconDeviceGamepad,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BlastOff — Casual Infinite Runner | Drape",
    description:
        "BlastOff is a casual endless runner with vector graphics — avoid obstacles, collect stars, and survive for high scores. Available on Android, Linux and Web.",
    keywords: [
        "infinite runner",
        "casual game",
        "vector graphics",
        "android game",
        "godot game",
        "open source game",
    ],
    openGraph: {
        title: "BlastOff — Casual Infinite Runner | Drape",
        description:
            "Avoid obstacles, collect stars, and customize your rocket in this open-source endless runner.",
        url: "https://drapelive.in/projects/blastoff",
        siteName: "Drape",
        images: [
            {
                url: "https://drapelive.in/projects/blastoff/blastoff-banner.png",
                width: 1200,
                height: 630,
                alt: "BlastOff banner",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "BlastOff — Casual Infinite Runner | Drape",
        description:
            "Avoid obstacles, collect stars, and customize your rocket in this open-source endless runner.",
        images: ["https://drapelive.in/projects/blastoff/blastoff-banner.png"],
    },
    alternates: {
        canonical: "https://drapelive.in/projects/blastoff",
    },
};

const BlastOffPage: React.FC = () => {
    const features = [
        {
            icon: <IconDeviceGamepad size={32} className="text-black" />,
            title: "Infinite Scrolling",
            description:
                "Endless procedurally generated world — how far can you go?",
        },
        {
            icon: <IconAlertTriangle size={32} className="text-black" />,
            title: "Obstacles",
            description:
                "Two types: Birds & Satellites — each requiring different timing to avoid",
        },
        {
            icon: <IconShield size={32} className="text-black" />,
            title: "PowerUps: Shield & Boost",
            description:
                "Activate shields to phase through obstacles or boost to surge ahead",
        },
        {
            icon: <IconStar size={32} className="text-black" />,
            title: "Collectables: Stars",
            description:
                "Gather stars to unlock customization options and track your wealth",
        },
        {
            icon: <IconBrush size={32} className="text-black" />,
            title: "Paints",
            description:
                "Customize your rocket's colour scheme to match your style",
        },
        {
            icon: <IconSticker size={32} className="text-black" />,
            title: "Stickers",
            description: "Apply unique decals to make your rocket truly yours",
        },
    ];

    const controls = [
        {
            platform: "Touch / Mouse",
            actions: [
                "Press right side to move right",
                "Press left side to move left",
                "Double tap to activate/deactivate PowerUp",
            ],
        },
        {
            platform: "Keyboard",
            actions: [
                "Press A to move right",
                "Press D to move left",
                "Press Space to activate/deactivate PowerUp",
            ],
        },
    ];

    const credits = [
        {
            title: "Art Style",
            detail: "Inspired from Goodgis",
            link: "https://goodgis.fun/",
        },
        {
            title: "Music",
            detail: "Homely Arcade, Bravery Demon & Bravery Run",
            link: "https://opengameart.org/content/homely-arcade",
        },
        {
            title: "Font",
            detail: "Rubik by Hubert & Fischer",
            link: "https://www.fontsquirrel.com/fonts/rubik",
        },
        {
            title: "Drop Shadow Shader",
            detail: "by deakcor",
            link: "https://godotshaders.com/shader/shadow-2d/",
        },
        {
            title: "Blinking Shader",
            detail: "by KingToot",
            link: "https://godotshaders.com/shader/radar-blip/",
        },
        {
            title: "Leaderboard",
            detail: "SilentWolf — backend services for Godot Engine",
            link: "https://silentwolf.com/leaderboard",
        },
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
                                src="/projects/blastoff/blastoff-logo.svg"
                                alt="BlastOff logo"
                                width={128}
                                height={128}
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                BlastOff
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600">
                                Casual Infinite Runner
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                About
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                BlastOff is a casual endless runner with an
                                emphasis on vector graphics. Dodge obstacles,
                                collect stars, activate powerups, and customize
                                your rocket as you soar through an infinitely
                                scrolling world. Available on Android, Linux,
                                and Web.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <a
                                    href="https://f-droid.org/en/packages/com.ranger.blastoff/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Get_it_on_F-Droid_%28material_design%29.svg"
                                        alt="Get it on F-Droid"
                                        width={180}
                                        height={60}
                                        className="h-14 w-auto"
                                    />
                                </a>
                                <a
                                    href="https://ranger-nf.itch.io/blastoff"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="https://static.itch.io/images/badge-color.svg"
                                        alt="Get it on itch.io"
                                        width={180}
                                        height={60}
                                        className="h-14 w-auto"
                                    />
                                </a>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                How to Play
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {controls.map((group, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <h3 className="text-xl font-bold mb-4">
                                            {group.platform}
                                        </h3>
                                        <ul className="space-y-3">
                                            {group.actions.map(
                                                (action, aIndex) => (
                                                    <li
                                                        key={aIndex}
                                                        className="flex items-start gap-3 text-gray-700"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                                                        {action}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Features
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <div className="w-14 h-14 bg-[#CFDBC2] rounded-full flex items-center justify-center mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Screenshots
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div
                                        key={num}
                                        className="bg-white rounded-xl overflow-hidden border border-gray-100"
                                    >
                                        <Image
                                            src={`https://raw.githubusercontent.com/Ranger-NF/BlastOff/main/Docs/Screenshots/latest/${num}.png`}
                                            alt={`BlastOff screenshot ${num}`}
                                            width={200}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Credits
                            </h2>
                            <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#CFDBC2]">
                                            <th className="text-left py-4 px-6 font-bold">
                                                Resource
                                            </th>
                                            <th className="text-left py-4 px-6 font-bold">
                                                Source
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {credits.map((item, index) => (
                                            <tr
                                                key={index}
                                                className={
                                                    index !== 0
                                                        ? "border-t border-gray-100"
                                                        : ""
                                                }
                                            >
                                                <td className="py-4 px-6 font-medium">
                                                    {item.title}
                                                </td>
                                                <td className="py-4 px-6 text-gray-600">
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline underline-offset-2 hover:text-gray-900 transition-colors"
                                                    >
                                                        {item.detail}
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="text-center">
                            <Link
                                href="/projects/blastoff/privacy"
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

export default BlastOffPage;
