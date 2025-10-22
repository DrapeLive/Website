"use client"
import React from "react";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import About from "../components/About";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection: React.FC = () => (
  <section className="min-h-screen pt-32 md:pt-40 pb-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="pl-[35px] space-y-6 md:space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-black">
            We build softwares that defines YOU
          </h1>
          <p className="text-base md:text-lg lg:text-[24px] max-w-xl">
            Running your business in itself is a hassle. Drape will manage the
            software-side for you. From web to mobile interfaces, we got you
            covered.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <DotLottieReact src="/hero-anim.lottie" loop autoplay />
        </div>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;