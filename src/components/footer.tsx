import React from 'react';
import { IconMail } from '@tabler/icons-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-2 md:py-8">
      <div className="container mx-auto px-6 flex items-center justify-center md:justify-between">
        {/* Logo */}
        <div className="md:flex items-center hidden">
          <Image
            src="/drape-logo-white.svg"
            alt="Drape Logo"
            width={40} height={10}
          />
        </div>

        <div className='flex flex-col items-center space-y-[15px]'>
          <nav className="flex justify-center items-center">
            <a 
              href="#about" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              About Drape
            </a>
            {/* <a 
              href="#works" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Our Works
            </a> */}
          </nav>
          <a 
              href="mailto:drapelive@gmail.com" 
              className="text-gray-400 text-[10px] md:text-[15px] hover:text-white transition-colors duration-200 flex items-center gap-2"
          > 
            <IconMail className='md:w-[20px] md:h-[20px] w-[15px] h-[15px]'/>
            drapelive@gmail.com
          </a>
          <div className="md:hidden">
            <p className="text-gray-500 text-[12px]">&copy; 2025 Drape</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2">
          <p className="text-gray-500 text-sm mt-[40px]">&copy; 2025 Drape</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
