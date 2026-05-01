"use client";
import React, { useState } from "react";
import { NavLink } from "./navLink";
import ContactForm from "./contactForm";
import Image from "next/image";
import { IconChevronRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export const Header: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 bg-[#F3EEE7] py-6 flex items-center justify-between">
        {/* Mobile: Hamburger left */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                style={{ display: "flex" }}
              >
                {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Logo — centered on mobile, left on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image
            src="/drape-logo.svg"
            alt="Drape Logo"
            className="w-[30px] h-[30px] md:w-10 md:h-10"
            width={40}
            height={40}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#faq">FAQs</NavLink>
          <NavLink href="#about">About</NavLink>
          <button
            onClick={() => setContactOpen(true)}
            className="cursor-pointer bg-black text-white px-3 h-9 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-lg"
          >
            <span className="px-2">Contact Drape</span>
            <span className="flex items-center h-9 border-l border-white/20 pl-2 justify-center">
              <IconChevronRight size={18} />
            </span>
          </button>
        </nav>

        {/* Mobile: Contact right */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setContactOpen(true)}
            className="cursor-pointer bg-black text-white px-3 h-8 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1 text-sm"
          >
            <span className="px-1">Contact</span>
            <span className="flex items-center h-8 border-l border-white/20 pl-1.5 justify-center">
              <IconChevronRight size={14} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#F3EEE7] border-t border-b border-black/8"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="px-5 py-4 flex flex-col"
            >
              {[
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Projects" },
                { href: "#faq", label: "FAQs" },
                { href: "#about", label: "About" },
              ].map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 text-base font-medium text-neutral-800 hover:text-black transition-colors border-b border-black/6 last:border-0"
                  >
                    {label}
                    <IconChevronRight size={15} className="text-neutral-400" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact modal */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <ContactForm onClose={() => setContactOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
