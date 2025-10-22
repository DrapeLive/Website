import React from 'react';
import { IconMail } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/drape-logo white.svg"
            alt="Drape Logo"
            className="h-10"
          />
        </div>

        <div className='space-y-[20px]'>
          <nav className="flex gap-12">
            <a 
              href="#about" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              About Drape
            </a>
            <a 
              href="#works" 
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Our Works
            </a>
          </nav>
          <a 
              href="mailto:drapelive@gmail.com" 
              className="text-gray-400 text-[15px] hover:text-white ml-[20px] transition-colors duration-200 flex items-center gap-2"
          > 
            <IconMail className='w-[20px] h-[20px]'/>
            drapelive@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-end gap-2">
          <p className="text-gray-500 text-sm mt-[40px]">&copy; 2025 Drape</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
