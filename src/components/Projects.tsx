import React from 'react';
import ProjectItem from './ProjectItem';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    name: 'React Pizza',
    desrciption: 'reactPizza',
    img: 'assets/reactPizza.png',
    stack: ['TypeScript', 'React', 'Redux', 'Tailwind'],
    links: {
      github: 'https://github.com/ArtemRozzhivin/ReactPizzaRemastered.git',
      preview: 'https://react-pizza-remastered.vercel.app/',
    },
  },
  {
    id: 2,
    name: 'React Sneakers',
    desrciption: 'reactSneakers',
    img: 'assets/reactSneakers.png',
    stack: ['TypeScript', 'React', 'Redux', 'Tailwind'],
    links: {
      github: 'https://github.com/ArtemRozzhivin/ReactSneakers.git',
      preview: 'https://react-sneakers-six.vercel.app/',
    },
  },
  {
    id: 3,
    name: 'Handyman Landing',
    desrciption: 'handymanLanding',
    img: 'assets/handyman.png',
    stack: ['TypeScript', 'React', 'Tailwind', 'Framer Motion'],
    links: {
      github: 'https://github.com/ArtemRozzhivin/handyman-landing.git',
      preview: 'https://handyman-landing.vercel.app/',
    },
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id='projects'>
      <h2 className='text-orange text-5xl'>{t('projects.title')}</h2>
      <div className='my-4'>{t('projects.main')}</div>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
        {projects.map((obj) => (
          <ProjectItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
