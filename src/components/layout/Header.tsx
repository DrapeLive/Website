import React from 'react';
import { NavLink, Button } from '../../components/ui';

export const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 bg-beige-light z-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/drape-logo.svg"
          alt="Drape Logo"
          className="h-10 mr-3"
        />
      </div>
      <nav className="flex items-center gap-6 md:gap-8">
        <NavLink href="#works">Works</NavLink>
        <NavLink href="#about">About</NavLink>
        <Button>Contact Drape</Button>
      </nav>
    </div>
  </header>
);
