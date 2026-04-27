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
    <div className="bg-[#cfdbc2] rounded-xl p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <IconWorld size={32} className="text-black" />,
      title: "Websites",
      description:
        "Modern, responsive websites that capture your brand essence and deliver exceptional user experiences across all devices.",
    },
    {
      icon: <IconDeviceMobile size={32} className="text-black" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications built for performance, designed to engage users on iOS and Android.",
    },
    {
      icon: <IconCode size={32} className="text-black" />,
      title: "Custom Software",
      description:
        "Tailored management systems and custom solutions engineered to streamline your operations and scale with your business.",
    },
  ];

  return (
    <section id="services" className="px-5 md:px-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
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
