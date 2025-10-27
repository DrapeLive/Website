"use client";

import React, { useState } from "react";
import { NavLink } from "./navLink";
import ContactForm from "./contactForm";
import Image from "next/image";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 bg-[#F3EEE7] py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/drape-logo.svg" alt="Drape Logo" width={40} height={10}/>
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink href="#about">About</NavLink>
          <button
          className="bg-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-[15px] hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-base font-medium"
            onClick={() => {
              setOpen(true);
            }}
          >
            Contact Drape
          </button>

          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="relative">
                <ContactForm onClose={() => setOpen(false)} />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
