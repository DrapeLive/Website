import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import About from "../components/About";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="min-h-screen flex items-center">
          <div className="container px-4 text-center">
            <h1 className="font-extrabold mb-4">
              We build softwares that defines YOU
            </h1>
            <p className="mb-8">
              Running your business in itself is a hassle. Drape will manage the
              software-side for you. From web to mobile interfaces, we got you
              covered.
            </p>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
