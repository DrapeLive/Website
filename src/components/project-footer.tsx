import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectFooter({ currentSlug }: { currentSlug: string }) {
  const otherProjects = projects.filter(
    (project) => project.slug !== currentSlug,
  );

  return (
    <footer className="bg-black text-white mt-20 px-5 md:px-0 py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">More from Drape</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {otherProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav
          aria-label="Drape"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 border-t border-white/10 pt-6"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-white transition-colors">
            About Drape
          </Link>
          <a
            href="mailto:drapelive@gmail.com"
            className="hover:text-white transition-colors"
          >
            drapelive@gmail.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
