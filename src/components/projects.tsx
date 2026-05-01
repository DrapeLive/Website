import React from "react";
import { IconArrowRight, IconPackage } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  banner?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  banner,
}) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        {banner ? (
          <Image
            src={banner}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="h-48 bg-[#CFDBC2] flex items-center justify-center">
            <IconPackage size={64} className="text-black/30" />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:underline">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 text-lg">{description}</p>
          <span className="inline-flex items-center gap-1 text-lg font-medium hover:gap-2 transition-all">
            View Project
            <IconArrowRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "stockFlow",
      description:
        "Inventory management system designed to simplify stock tracking, optimize reorder points, and provide real-time insights for businesses of all sizes.",
      href: "/projects/stockflow",
      banner: "/projects/stockflow/stockflow-banner.jpg",
    },
  ];

  return (
    <section id="projects" className="px-5 md:px-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12 md:mb-16 font-bold text-5xl lg:text-[64px]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              banner={project.banner}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
