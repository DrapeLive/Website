"use client"

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [" Websites", " Mobile Apps"];


const About: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="about" className="py-16">
      <div className="mx-auto">
        <h2 className="text-center mb-12 font-bold text-[36px]">About Drape</h2>
        <div className="flex flex-col md:flex-row py-[12px] px-[80px] items-center gap-8">
          <div className="md:w-1/2 text-[24px] px-[40px]">
            We are a set of students fueled by the passion to build meaningful
            softwares. Having built many softwares ourselves - we assure quality
            and consistency
          </div>
          <div className="md:w-1/2 text-[64px]">
            <span>We build </span>
            <span className="font-bold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
