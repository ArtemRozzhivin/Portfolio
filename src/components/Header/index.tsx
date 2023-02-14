import React from 'react';
import Burger from '../../ui/Burger';
import { HashLink } from 'react-router-hash-link';
import Navigation, { navSection } from '../Navigation';
import { scrollWithOffset } from '../../utils/scrollWithOffset';
import Button from '../../ui/Button';

interface HeaderInterface {
  visibleBurger: boolean;
  onClickBurger: () => void;
}

const Header: React.FC<HeaderInterface> = ({ visibleBurger, onClickBurger }) => {
  return (
    <header className="w-full py-4 bg-header xs:px-4">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <HashLink className="text-2xl" to={'#greeting'} scroll={(el) => scrollWithOffset(el)}>
            ARPortfolio
          </HashLink>

          <Button className="block sm:hidden" onClick={onClickBurger} none>
            {visibleBurger ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
            )}
          </Button>
        </div>
        <nav className="xs:hidden sm:block">
          <ul className="flex gap-x-5 text-base">
            {navSection.map((elem) => (
              <li>
                <HashLink
                  className="p-2 hover:bg-orange rounded-2xl transition-all"
                  to={'#' + elem.id}
                  scroll={(el) => scrollWithOffset(el)}>
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
