import React from 'react';
import Burger from '../../ui/Burger';
import Navigation from '../Navigation';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-header xs:px-4">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">ARPortfolio</h1>
        <div className="block sm:hidden">
          <Burger />
        </div>
        <nav className="xs:hidden sm:block">
          <ul className="flex gap-x-5 text-base">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
