import React from 'react';
import Burger from '../../ui/Burger';
import { HashLink } from 'react-router-hash-link';
import Navigation, { navSection } from '../Navigation';
import { scrollWithOffset } from '../../utils/scrollWithOffset';
import Button from '../../ui/Button';

interface HeaderInterface {
  onClickBurger: () => void;
}

const Header: React.FC<HeaderInterface> = ({ onClickBurger }) => {
  return (
    <header className="w-full py-4 bg-header xs:px-4">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl">ARPortfolio</h1>

          <Button className="block sm:hidden" onClick={onClickBurger} none>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
        <nav className="xs:hidden sm:block">
          <ul className="flex gap-x-5 text-base">
            {navSection.map((elem) => (
              <li>
                <HashLink to={'#' + elem.id} scroll={(el) => scrollWithOffset(el)}>
                  {elem.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
