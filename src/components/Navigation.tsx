import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../utils/scrollWithOffset';

interface NavigationInterface {
  visibleBurger: boolean;
  onClickBurger: () => void;
}

export const navSection = [
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contacts', name: 'Contacts' },
];

const Navigation: React.FC<NavigationInterface> = ({ visibleBurger, onClickBurger }) => {
  return (
    <>
      <AnimatePresence>
        {visibleBurger && (
          <motion.nav
            initial={{ y: '-100vh' }}
            animate={{ y: '0' }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 0.5 }}
            className="fixed bg-app w-full z-10 h-full top-0 left-0">
            <ul className="flex flex-col gap-10 text-3xl justify-center items-center w-full h-full">
              {navSection.map((elem) => (
                <li>
                  <HashLink
                    to={'#' + elem.id}
                    onClick={onClickBurger}
                    scroll={(el) => scrollWithOffset(el)}>
                    {elem.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
