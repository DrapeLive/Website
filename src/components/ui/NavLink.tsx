import React from 'react';

interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, href = '#' }) => (
  <a 
    href={href} 
    className="text-black hover:text-gray-700 transition-colors text-sm md:text-base font-medium"
  >
    {children}
  </a>
);