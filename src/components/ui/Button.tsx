import React from 'react';
import { IconChevronRight } from "@tabler/icons-react";



interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-[15px] hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-base font-medium"
  >
    {children}
    <IconChevronRight color="white" className="mt-[3.3px]"/>
  </button>
);