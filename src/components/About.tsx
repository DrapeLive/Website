import React from "react";

const About: React.FC = () => {
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
          <div className="md:w-1/2 text-[64px]">We build <span className="font-bold">websites</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
