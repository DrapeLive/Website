"use client";
import React from "react";
import { IconArrowRight, IconPackage } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  banner?: string;
  tag?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  banner,
  tag,
}) => {
  return (
    <Link href={href} className="block group h-full">
      <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-neutral-600 bg-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
        {/* Banner */}
        <div className="relative overflow-hidden">
          {banner ? (
            <Image
              src={banner}
              alt={title}
              width={600}
              height={340}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-52 bg-[#3a4f35] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <IconPackage
                size={56}
                className="text-black/20 dark:text-white/20"
              />
            </div>
          )}
          {tag && (
            <span className="absolute top-3 left-3 text-[11px] font-medium px-3 py-1 rounded-full bg-neutral-900/50 text-neutral-100 border border-neutral-700 backdrop-blur-sm">
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-3xl font-semibold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
            {title}
          </h3>
          <p className="text-md text-neutral-600 leading-relaxed flex-1 mb-5">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium  text-neutral-900 group-hover:gap-2.5 transition-all duration-200">
            View Project
            <IconArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "StockFlow",
      description:
        "Inventory management system designed to simplify stock tracking, optimize reorder points, and provide real-time insights for businesses of all sizes.",
      href: "/projects/stockflow",
      banner: "/projects/stockflow/stockflow-banner.jpg",
      tag: "Web App",
    },
  ];

  return (
    <section id="projects" className="px-5 md:px-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12 md:mb-16 font-bold text-5xl lg:text-[64px]">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              banner={project.banner}
              tag={project.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
