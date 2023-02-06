import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="h-[100vh]">
      <ul className="flex flex-col gap-10 text-3xl justify-center items-center w-full h-full">
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
  );
};

export default Navigation;
