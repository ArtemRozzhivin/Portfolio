import React from 'react';
import ProjectItem from '../ProjectItem';

const projects = [
  {
    id: '1',
    name: 'React Pizza',
    desrciption:
      'The site is an online store selling sneakers. The site has several pages: main, shopping cart, favorites, purchased. The site also has animations and is fully responsive. A fake api was used on the motskapi service',
    img: 'assets/reactPizza.png',
    stack: 'TypeScript, React, Redux Tailwind',
  },
  {
    id: '2',
    name: 'React Sneakers',
    desrciption:
      'The site is an online store selling sneakers. The site has several pages: main, shopping cart, favorites, purchased. The site also has animations and is fully responsive. A fake api was used on the motskapi service',
    img: 'assets/reactSneakers.png',
    stack: 'TypeScript, React, Redux Tailwind',
  },
  {
    id: '3',
    name: 'React Sneakers',
    desrciption:
      'The site is an online store selling sneakers. The site has several pages: main, shopping cart, favorites, purchased. The site also has animations and is fully responsive. A fake api was used on the motskapi service',
    img: 'assets/reactSneakers.png',
    stack: 'TypeScript, React, Redux Tailwind',
  },
];

const Projects: React.FC = () => {
  console.log(window.screen.availWidth < 700);
  return (
    <div>
      <h2 className="text-orange text-5xl">Featured projects</h2>
      <div className="my-4">
        These are my projects in which I study and improve my skills and abilities.
      </div>
      <div className="grid gap-5 grid-cols-1">
        {projects.map((obj) => (
          <ProjectItem oneColumn={window.screen.availWidth < 700} key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
