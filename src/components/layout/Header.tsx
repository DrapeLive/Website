import React from "react";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center fixed top-0 left-0 w-full z-20">
      <div className="flex items-center">
        <img
          src="/public/drape-logo.svg"
          alt="Drape Logo"
          className="h-10 mr-3"
        />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="text-gray-600 hover:text-purple-600 text-lg font-medium"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 text-lg font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
