import React from 'react';
import { Header } from '../components/layout';

const PhoneMockup: React.FC = () => (
  <div className="relative w-48 h-96 md:w-64 md:h-[500px] lg:w-72 lg:h-[560px]">
    <div className="absolute inset-0 bg-beige-light rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-8 border-olive shadow-2xl">
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-olive rounded-full"></div>
    </div>
  </div>
);

const HeroSection: React.FC = () => (
  <section className="min-h-screen bg-beige-light pt-32 md:pt-40 pb-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold text-black leading-tight">
            We build softwares that defines YOU
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-xl">
            Running your business in itself is a hassle. Drape will manage the software-side for you. From web to mobile interfaces, we got you covered.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </div>
  </section>
);

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <HeroSection />
    </div>
  );
};