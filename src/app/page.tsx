import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";
import TeamSection from "@/components/team";
import ServicesSection from "@/components/services";
import ProjectsSection from "@/components/projects";
import Faq from "@/components/faq";
import HeroAnimation from "@/components/heroAnimation";
import { JsonLd } from "@/components/json-ld";
import { servicesSchema } from "@/lib/schema";

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center min-h-screen md:px-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-4 lg:col-span-3">
            <h1 className="text-5xl leading-12 md:leading-14 lg:text-[56px] font-bold">
              We build software that defines{" "}
              <span className="text-[#636B2F]">YOU</span>.
            </h1>
            <p className="text-2xl lg:text-[32px] md:leading-11">
              Running your business in itself is a hassle. Drape will manage the
              software-side for you. From web to mobile interfaces, we got you
              covered.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end lg:col-span-2">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <JsonLd data={servicesSchema} />
      <Header />
      <main id="main-content">
        <HeroSection />
        <div className="flex flex-col min-h-screen pt-20 gap-20 md:gap-32">
          <ServicesSection />
          <ProjectsSection />
          <TeamSection />
          <About />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
