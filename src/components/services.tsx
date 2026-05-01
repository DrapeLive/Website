import React from "react";
import { IconWorld, IconDeviceMobile, IconCode } from "@tabler/icons-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group relative rounded-2xl p-8 md:p-10 flex flex-col items-center text-center border border-neutral-700 bg-white/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#cfdbc2]/60 hover:border-[#cfdbc2] overflow-hidden">
      {/* Soft blob that bleeds in on hover */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#cfdbc2]/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon circle */}
      <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-[#cfdbc2] border border-[#b8cba9] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <span className="text-[#636B2F]">{icon}</span>
      </div>

      <h3 className="text-3xl font-bold mb-3 text-[#636B2F] group-hover:tracking-wide transition-all duration-300">
        {title}
      </h3>

      <p className="text-neutral-500 text-lg leading-relaxed">{description}</p>

      {/* Bottom accent line that slides in */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#636B2F]/40 rounded-full group-hover:w-1/2 transition-all duration-500" />
    </div>
  );
};
const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <IconWorld size={64} className="text-black" stroke={1} />,
      title: "Websites",
      description:
        "Modern, responsive websites that capture your brand essence and deliver exceptional user experiences across all devices.",
    },
    {
      icon: <IconDeviceMobile size={64} className="text-black" stroke={1} />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications built for performance, designed to engage users on iOS and Android.",
    },
    {
      icon: <IconCode size={64} className="text-black" stroke={1} />,
      title: "Custom Software",
      description:
        "Tailored management systems and custom solutions engineered to streamline your operations and scale with your business.",
    },
  ];

  return (
    <section id="services" className="px-5 md:px-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-center mb-12 md:mb-16 font-bold text-5xl lg:text-[64px]">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
