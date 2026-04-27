import React from "react";
import { IconMail } from "@tabler/icons-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-2 md:py-8">
      <div className="container mx-auto px-6 flex items-center justify-center md:justify-between">
        {/* Logo */}
        <div className="md:flex items-center hidden">
          <Image
            src="/drape-logo-white.svg"
            alt="Drape Logo"
            width={40}
            height={10}
          />
        </div>

        <div className="flex flex-col items-center space-y-[15px]">
          <nav className="flex justify-center items-center gap-6">
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors text-lg duration-200"
            >
              About Drape
            </a>
            <a
              href="#services"
              className="text-white hover:text-gray-300 transition-colors text-lg duration-200"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-300 transition-colors text-lg duration-200"
            >
              Projects
            </a>
            <a
              href="#team"
              className="text-white hover:text-gray-300 transition-colors text-lg duration-200"
            >
              The Team
            </a>
          </nav>
          <a
            href="mailto:drapelive@gmail.com"
            className="text-gray-400 text-md md:text-lg hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <IconMail className="w-5 h-5" />
            drapelive@gmail.com
          </a>
          <div className="md:hidden">
            <p className="text-gray-500 text-md">&copy; 2025 Drape</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2">
          <p className="text-gray-500 text-md mt-[40px]">&copy; 2025 Drape</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
