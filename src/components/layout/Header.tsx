import React, { useState } from "react";
import Button from "../ui/Button";
import { NavLink } from "../ui/NavLink";
import ContactForm from "../ContactForm";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 bg-[#F3EEE7] py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/drape-logo.svg" alt="Drape Logo" className="h-10" />
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink href="#about">About</NavLink>
          <Button onClick={() => setOpen(true)}>Contact Drape</Button>

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
