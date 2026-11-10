import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-beige-light flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-lg font-medium text-[#636B2F] mb-2">404</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        We couldn&apos;t find that page
      </h1>
      <p className="text-lg text-neutral-600 max-w-md mb-8">
        The page may have moved, or the link might be wrong. Here are a few
        places to continue.
      </p>
      <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/#projects"
          className="border border-neutral-300 px-5 py-2.5 rounded-lg hover:border-neutral-500 transition-colors"
        >
          See our projects
        </Link>
        <a
          href="mailto:drapelive@gmail.com"
          className="border border-neutral-300 px-5 py-2.5 rounded-lg hover:border-neutral-500 transition-colors"
        >
          Email Drape
        </a>
      </nav>
    </main>
  );
}
