"use client";
import React, { useState } from "react";
import { Header } from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
    <section className="min-h-screen pt-32 md:pt-40 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="pl-[35px] space-y-6 md:space-y-2">
            <p className="text-4xl md:text-5xl lg:text-[64px] font-alegreyaSans font-bold text-black">
              We build softwares that defines YOU
            </p>
            <div className="text-base md:text-lg lg:text-[24px] max-w-xl">
              Running your business in itself is a hassle. Drape will manage the
              software-side for you. From web to mobile interfaces, we got you
              covered.
            </div>
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
      <About />
      <Footer />
    </div>
  );
};

export default Home;
