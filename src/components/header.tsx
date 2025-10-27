"use client";

import React, { useState } from "react";
import { NavLink } from "./navLink";
import ContactForm from "./contactForm";
import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 bg-[#F3EEE7] py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/drape-logo.svg"
            alt="Drape Logo"
            className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            width={1}
            height={1}
          />
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink href="#about">About</NavLink>
          <button
            className="cursor-pointer bg-black text-white px-2 md:px-3 md:h-[36px] rounded-[8px] hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-lg"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="md:p-4">Contact Drape</div>
            <div className="flex items-center h-[36px] border-l pl-2 justify-center ">
              <IconChevronRight />
            </div>
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
