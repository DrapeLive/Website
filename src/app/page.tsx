"use client";
import React, { useState } from "react";
import { Header } from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TeamSection from "@/components/team";
import { motion } from "motion/react";
import HeroText from "@/components/animations/heroText";

const HeroSection: React.FC = () => {
  const [lottieAnimSrc, setLottieAnimSrc] = useState<string>(
    "hero-anim-load.json",
  );
  const [isLooping, setIsLooping] = useState<boolean>(false);

  const onComplete = () => {
    if (lottieAnimSrc == "hero-anim-load.json") {
      setLottieAnimSrc("hero-anim-loop.json");
      setIsLooping(true);
    }
  };

  return (
    <section className="min-h-screen pt-32 md:pt-40 pb-16 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="pl-5 space-y-6 md:space-y-4">
            <HeroText
              content="We build softwares that defines YOU."
              emphasis="YOU"
              className="text-5xl leading-12 md:leading-14 lg:text-[64px] font-[alegreyaSans] font-bold"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl lg:text-[30px] md:leading-8"
            >
              Running your business in itself is a hassle. Drape will manage the
              software-side for you. From web to mobile interfaces, we got you
              covered.
            </motion.div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <DotLottieReact
              src={String(lottieAnimSrc) || "hero-anim-load.json"}
              dotLottieRefCallback={(dotLottie) => {
                dotLottie!.addEventListener("complete", onComplete);
              }}
              loop={isLooping}
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <HeroSection />
      <div className="flex flex-col justify-between min-h-screen pt-20">
        <TeamSection />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
