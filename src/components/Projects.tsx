import React from 'react';
import ProjectItem from '../ProjectItem';

const projects = [
  {
    name: 'React Pizza',
    desrciption:
      'The site is an online store selling sneakers. The site has several pages: main, shopping cart, favorites, purchased. The site also has animations and is fully responsive. A fake api was used on the motskapi service',
    img: 'assets/reactPizza.png',
    stack: 'TypeScript, React, Redux Tailwind',
  },
  {
    name: 'React Sneakers',
    desrciption:
      'The site is an online store selling sneakers. The site has several pages: main, shopping cart, favorites, purchased. The site also has animations and is fully responsive. A fake api was used on the motskapi service',
    img: 'assets/reactSneakers.png',
    stack: 'TypeScript, React, Redux Tailwind',
  },
  {
    name: 'React Sneakers',
    desrciption:
      'The site is an online store selling sneakers. The site has several pages: main, shopping cart, favorites, purchased. The site also has animations and is fully responsive. A fake api was used on the motskapi service',
    img: 'assets/reactSneakers.png',
    stack: 'TypeScript, React, Redux Tailwind',
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-orange text-5xl">Featured projects</h2>
      <div className="my-4">
        These are my projects in which I study and improve my skills and abilities.
      </div>
      <div className="grid gap-5 grid-cols-2">
        {projects.map((obj) => (
          <ProjectItem {...obj} oneColumn />
        ))}
      </div>
    </div>
  );
};

export default Projects;
