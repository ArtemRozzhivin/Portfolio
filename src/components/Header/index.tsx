import React from 'react';
import Burger from '../../ui/Burger';
import { HashLink } from 'react-router-hash-link';
import Navigation from '../Navigation';

const Header: React.FC = () => {
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

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
              <HashLink scroll={(el) => scrollWithOffset(el)} to="#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink scroll={(el) => scrollWithOffset(el)} to="#skills">
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink scroll={(el) => scrollWithOffset(el)} to="#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink scroll={(el) => scrollWithOffset(el)} to="#contacts">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
