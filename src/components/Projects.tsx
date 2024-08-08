import React from 'react';
import ProjectItem from './ProjectItem';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        <h2 className='text-orange text-5xl'>{t('projects.title')}</h2>
        <div className='my-4'>{t('projects.main')}</div>
      </motion.div>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
        {projects.map((obj) => (
          <motion.div
            initial={{ scale: '0', opacity: 0 }}
            whileInView={{ scale: '1', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <ProjectItem key={obj.id} {...obj} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
