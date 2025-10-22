import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="min-h-screen container px-4">
        <h2 className="text-center mb-12">About Drape</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            We are a set of students fueled by the passion to build meaningful
            softwares. Having built many softwares ourselves - we assure quality
            and consistency
          </div>
          <div className="md:w-1/2">We build websites</div>
        </div>
      </div>
    </section>
  );
};

export default About;
