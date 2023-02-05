import React from 'react';
import SkillItem from './SkillItem';

const skills = [
  { title: 'JavaScript', img: 'assets/javascript.png' },
  { title: 'TypeScript', img: 'assets/typescript.png' },
  { title: 'React', img: 'assets/react.png' },
  { title: 'Redux', img: 'assets/redux.png' },
  { title: 'Tailwind', img: 'assets/tailwind.png' },
  { title: 'HTML', img: 'assets/html.png' },
  { title: 'CSS', img: 'assets/css.png' },
  { title: 'SCSS', img: 'assets/scss.png' },
  { title: 'GIT', img: 'assets/git.png' },
];

const Skills: React.FC = () => {
  return (
    <div className="flex items-center gap-10 relative">
      <div className="flex-auto">
        <h2 className="text-orange text-5xl mb-4">My Skills</h2>
        <div className="mb-4">
          These are technologies and tools that I use when developing projects
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-3">
          {skills.map((obj) => (
            <SkillItem key={obj.title} title={obj.title} img={obj.img} />
          ))}
        </div>
      </div>
      <div className="absolute h-[300px] w-[300px] top-[10%] right-0 -z-10 opacity-20 flex-1/3 md:static md:opacity-100 md:h-auto md:w-auto">
        <img src="assets/skills.png" alt="Skills" />
      </div>
    </div>
  );
};

export default Skills;
