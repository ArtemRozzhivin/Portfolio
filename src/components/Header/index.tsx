import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 py-4 bg-header xs:px-4">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <h1>AR</h1>
        <nav>
          <ul className="flex gap-x-5 text-base">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
