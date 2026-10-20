import React from "react";
import {
    IconArrowLeft,
    IconUsers,
    IconUserCheck,
    IconUserX,
    IconCrown,
    IconShieldCheck,
    IconSearch,
    IconTrophy,
    IconCards,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polisum Kallanum — Traditional Kerala Paper Game | Drape",
    description:
        "Polisum Kallanum (പോലീസും കള്ളനും) is a traditional Kerala paper game where players secretly pick character slips — can the police catch the thief? A fun social game for friends and family.",
    keywords: [
        "polisum kallanum",
        "policeum kallanum",
        "പോലീസും കള്ളനും",
        "Kerala paper game",
        "traditional Kerala game",
        "police and thief game",
        "social party game",
        "card game Kerala",
    ],
    openGraph: {
        title: "Polisum Kallanum — Traditional Kerala Paper Game | Drape",
        description:
            "A traditional Kerala paper game — pick your secret role and see if the police can catch the thief!",
        url: "https://drapelive.in/projects/polisum_kallanum",
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
        title: "Polisum Kallanum — Traditional Kerala Paper Game | Drape",
        description:
            "Pick your secret role, hide from the police, or catch the thief — a fun game for everyone.",
        images: [
            "https://drapelive.in/projects/polisum_kallanum/banner.png",
        ],
    },
    alternates: {
        canonical: "https://drapelive.in/projects/polisum_kallanum",
    },
};

const PolisumKallanumPage: React.FC = () => {
    const characters = [
        {
            icon: <IconCrown size={32} className="text-black" />,
            name: "King",
            malayalam: "രാജാവ്",
            score: "1,000 pts",
            description:
                "The highest-scoring character. Receives fixed points regardless of the outcome.",
        },
        {
            icon: <IconUserCheck size={32} className="text-black" />,
            name: "Minister",
            malayalam: "മന്ത്രി",
            score: "600 pts",
            description:
                "Second highest rank. Earns their fixed score every round.",
        },
        {
            icon: <IconShieldCheck size={32} className="text-black" />,
            name: "Police",
            malayalam: "പോലീസ്",
            score: "Special",
            description:
                "Earns 500 pts by catching the thief, or 0 pts if the guess is wrong.",
        },
        {
            icon: <IconSearch size={32} className="text-black" />,
            name: "Thief",
            malayalam: "കള്ളൻ",
            score: "Special",
            description:
                "Earns 500 pts if the police fails to identify them, or 0 pts if caught.",
        },
    ];

    const howToPlay = [
        {
            step: "01",
            title: "Prepare the Slips",
            description:
                "Write a character name and score on each paper slip. Fold them so the writing is hidden. Prepare one slip per player — always include one Police and one Thief.",
        },
        {
            step: "02",
            title: "Pick Your Role",
            description:
                "Mix all folded slips thoroughly. Each player randomly picks one slip and secretly reads their character without showing anyone else.",
        },
        {
            step: "03",
            title: "Police Makes a Guess",
            description:
                "The player who picked the Police slip observes the others and announces their guess — naming the player they believe is the Thief.",
        },
        {
            step: "04",
            title: "Reveal & Score",
            description:
                "The identified player reveals their slip. If it's the Thief, Police gets 500 pts and Thief gets 0. If wrong, Thief gets 500 pts and Police gets 0. All other characters earn their fixed scores.",
        },
    ];

    const scoringRules = [
        {
            result: "Police correctly identifies the thief",
            police: "500 pts",
            thief: "0 pts",
        },
        {
            result: "Police fails to catch the thief",
            police: "0 pts",
            thief: "500 pts",
        },
    ];

    const screenshots = [
        "/projects/polisum_kallanum/screen_shot1.jpg",
        "/projects/polisum_kallanum/screen_shot2.jpg",
        "/projects/polisum_kallanum/screen_shot3.jpg",
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
                    {/* Hero */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center overflow-hidden">
                            <Image
                                src="/projects/polisum_kallanum/icon.jpg"
                                alt="Polisum Kallanum icon"
                                width={128}
                                height={128}
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-2">
                                Polisum Kallanum
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-500 mb-2">
                                പോലീസും കള്ളനും
                            </p>
                            <p className="text-xl md:text-2xl text-gray-600">
                                Traditional Kerala Paper Game
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {/* About */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                About
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Polisum Kallanum (പോലീസും കള്ളനും) is a
                                traditional Kerala paper game built around
                                secret roles, social deduction, and scoring.
                                Players pick folded paper slips containing
                                character names — King, Minister, Police, or
                                Thief — and keep their role hidden. The central
                                challenge is simple: can the police identify
                                the thief before the round ends?
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mt-4">
                                It is simple enough for children yet
                                entertaining for adults — perfect for family
                                gatherings, classroom breaks, or any occasion
                                where you have a few friends and a handful of
                                paper slips.
                            </p>
                        </section>

                        {/* How to Play */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                How to Play
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {howToPlay.map((step, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <span className="text-4xl font-bold text-[#CFDBC2]">
                                            {step.step}
                                        </span>
                                        <h3 className="text-xl font-bold mt-2 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Characters */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Characters
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {characters.map((char, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 border border-gray-100"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-14 h-14 bg-[#CFDBC2] rounded-full flex items-center justify-center flex-shrink-0">
                                                {char.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold leading-tight">
                                                    {char.name}
                                                </h3>
                                                <p className="text-gray-400 text-base">
                                                    {char.malayalam}
                                                </p>
                                            </div>
                                            <span className="ml-auto text-right text-lg font-bold text-[#636B2F]">
                                                {char.score}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {char.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 text-base mt-4 leading-relaxed">
                                Additional characters (e.g. 100–300 pt roles)
                                can be added to match the number of players.
                                Use the scores written on your actual paper
                                slips — these are only examples.
                            </p>
                        </section>

                        {/* Scoring */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Scoring Rules
                            </h2>
                            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 mb-6">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#CFDBC2]">
                                            <th className="text-left py-4 px-6 font-bold">
                                                Outcome
                                            </th>
                                            <th className="text-center py-4 px-6 font-bold">
                                                Police
                                            </th>
                                            <th className="text-center py-4 px-6 font-bold">
                                                Thief
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scoringRules.map((rule, index) => (
                                            <tr
                                                key={index}
                                                className={
                                                    index !== 0
                                                        ? "border-t border-gray-100"
                                                        : ""
                                                }
                                            >
                                                <td className="py-4 px-6 text-gray-700">
                                                    {rule.result}
                                                </td>
                                                <td className="py-4 px-6 text-center font-bold text-[#636B2F]">
                                                    {rule.police}
                                                </td>
                                                <td className="py-4 px-6 text-center font-bold text-[#636B2F]">
                                                    {rule.thief}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">
                                All other characters (King, Minister, etc.)
                                always receive the fixed score written on their
                                slip, regardless of whether the police catches
                                the thief.
                            </p>
                        </section>

                        {/* Example Round */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Example Round
                            </h2>
                            <p className="text-gray-600 mb-4 text-base">
                                Four players participate. Police guesses
                                correctly in Case 1 and incorrectly in Case 2.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Case 1 */}
                                <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                                    <div className="bg-[#CFDBC2] px-6 py-3 flex items-center gap-2">
                                        <IconTrophy size={18} className="text-[#636B2F]" />
                                        <h3 className="font-bold text-[#3a4f35]">
                                            Case 1 — Police Catches Thief
                                        </h3>
                                    </div>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="text-left py-3 px-6 text-sm text-gray-500 font-medium">
                                                    Player
                                                </th>
                                                <th className="text-left py-3 px-6 text-sm text-gray-500 font-medium">
                                                    Role
                                                </th>
                                                <th className="text-right py-3 px-6 text-sm text-gray-500 font-medium">
                                                    Points
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { player: "Player A", role: "King", pts: "1,000" },
                                                { player: "Player B", role: "Police ✓", pts: "500" },
                                                { player: "Player C", role: "Thief", pts: "0" },
                                                { player: "Player D", role: "Minister", pts: "600" },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-t border-gray-50">
                                                    <td className="py-3 px-6 text-gray-700">{row.player}</td>
                                                    <td className="py-3 px-6 text-gray-600">{row.role}</td>
                                                    <td className="py-3 px-6 text-right font-bold text-[#636B2F]">{row.pts}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Case 2 */}
                                <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                                    <div className="bg-gray-100 px-6 py-3 flex items-center gap-2">
                                        <IconUserX size={18} className="text-gray-500" />
                                        <h3 className="font-bold text-gray-600">
                                            Case 2 — Police Fails
                                        </h3>
                                    </div>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="text-left py-3 px-6 text-sm text-gray-500 font-medium">
                                                    Player
                                                </th>
                                                <th className="text-left py-3 px-6 text-sm text-gray-500 font-medium">
                                                    Role
                                                </th>
                                                <th className="text-right py-3 px-6 text-sm text-gray-500 font-medium">
                                                    Points
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { player: "Player A", role: "King", pts: "1,000" },
                                                { player: "Player B", role: "Police ✗", pts: "0" },
                                                { player: "Player C", role: "Thief ✓", pts: "500" },
                                                { player: "Player D", role: "Minister", pts: "600" },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-t border-gray-50">
                                                    <td className="py-3 px-6 text-gray-700">{row.player}</td>
                                                    <td className="py-3 px-6 text-gray-600">{row.role}</td>
                                                    <td className="py-3 px-6 text-right font-bold text-[#636B2F]">{row.pts}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Quick Rules */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Quick Rules
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    {
                                        icon: <IconUsers size={28} className="text-black" />,
                                        title: "Players",
                                        detail: "4 or more recommended",
                                    },
                                    {
                                        icon: <IconCards size={28} className="text-black" />,
                                        title: "Slips",
                                        detail: "One slip per player — always include Police & Thief",
                                    },
                                    {
                                        icon: <IconSearch size={28} className="text-black" />,
                                        title: "Guessing",
                                        detail: "Police gets one guess per round",
                                    },
                                    {
                                        icon: <IconShieldCheck size={28} className="text-black" />,
                                        title: "Secrecy",
                                        detail: "Characters must stay hidden until the guess is made",
                                    },
                                    {
                                        icon: <IconTrophy size={28} className="text-black" />,
                                        title: "Winning",
                                        detail: "Highest total score after agreed rounds wins",
                                    },
                                    {
                                        icon: <IconCrown size={28} className="text-black" />,
                                        title: "Tie",
                                        detail: "Play an extra round to break ties",
                                    },
                                ].map((rule, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 bg-[#CFDBC2] rounded-full flex items-center justify-center flex-shrink-0">
                                            {rule.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-1">
                                                {rule.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {rule.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Screenshots */}
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
                                            alt={`Polisum Kallanum screenshot ${index + 1}`}
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
                                href="/projects/polisum_kallanum/privacy"
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

export default PolisumKallanumPage;
